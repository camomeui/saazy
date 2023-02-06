/* eslint-disable no-inner-declarations */
import fs from "fs/promises";
import path from "path";

import { globby } from "globby";
import { JSDOM } from "jsdom";
import prettier, { Options } from "prettier";

import _prettierrc from "../.prettierrc.json";

const prettierrc = _prettierrc as Options;

(async () => {
  const nextOutPath = "out";
  const distPath = "dist";

  await fs.rm(distPath, { recursive: true, force: true });
  await fs.cp(nextOutPath, distPath, {
    recursive: true,
    force: true,
  });

  const htmlPaths = await globby(path.join(distPath, "**/*.html"));
  for (const htmlPath of htmlPaths) {
    const html = await fs.readFile(htmlPath, "utf-8");
    const {
      window: { document },
    } = new JSDOM(html);

    await removeTags();
    await processCss();
    await processAnchors();
    await processWebFont();
    await appendScripts();
    await write();
    await cleanup();

    async function processCss() {
      const cssLinks = Array.from(document.querySelectorAll("link")).filter(
        (link) => link.href.startsWith("/_next/static/css")
      );

      const cssHref =
        "/styles" + htmlPath.replace(distPath, "").replace(".html", ".css");
      let pageCssContent = "";

      for (const cssLink of cssLinks) {
        const cssSrcPath = path.join(nextOutPath, cssLink.href);
        pageCssContent += await fs.readFile(cssSrcPath, "utf-8");
        cssLink.remove();
      }

      const cssDistPath = path.join(distPath, cssHref);
      if (cssHref.split("/styles/")[1].includes("/")) {
        await fs.mkdir(cssDistPath.split("/").slice(0, -1).join("/"), {
          recursive: true,
        });
      }
      await fs.writeFile(
        cssDistPath,
        prettier.format(pageCssContent, {
          ...prettierrc,
          parser: "css",
        })
      );

      const linkElm = document.createElement("link");
      linkElm.rel = "stylesheet";
      linkElm.href = cssHref;
      document.head.appendChild(linkElm);
    }

    async function processAnchors() {
      document.querySelectorAll("a").forEach((anchor) => {
        if (anchor.href.startsWith("/")) {
          const fakeBase = "http://example.com";
          const url = new URL(anchor.href, fakeBase);
          if (url.pathname === "/") return;
          url.pathname += ".html";
          anchor.href = url.toString().replace(fakeBase, "");
        }
      });
    }

    async function processWebFont() {
      const link = document.createElement("link");
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    async function appendScripts() {
      const script = document.createElement("script");
      script.src = "/scripts/index.js";
      script.type = "module";
      document.body.appendChild(script);
    }

    async function removeTags() {
      const selectors = [
        "script",
        "noscript",
        "style",
        "meta[name='next-head-count']",
      ];
      Array.from(document.querySelectorAll(selectors.join(","))).forEach(
        (tag) => {
          tag.remove();
        }
      );
    }

    async function write() {
      await fs.writeFile(
        htmlPath,
        prettier.format(document.documentElement.outerHTML, {
          ...prettierrc,
          parser: "html",
        })
      );
    }

    async function cleanup() {
      await fs.rm(path.join(distPath, "_next"), {
        recursive: true,
        force: true,
      });
    }
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
