import { disableBodyScroll, enableBodyScroll } from "./bodyScrollLock.js";

function bootstrapDialog() {
  const attrDialogTrigger = "data-dialog-trigger-for";

  document.querySelectorAll(`[${attrDialogTrigger}]`).forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute(attrDialogTrigger);
      const targetElm = document.getElementById(targetId);
      if ("showModal" in targetElm && "close" in targetElm) {
        if (targetElm.hasAttribute("open")) {
          targetElm.close();
          enableScroll(targetElm);
        } else {
          targetElm.showModal();
          disableScroll(targetElm);
        }
      }
    });
  });

  let scrollY;

  const disableScroll = (target) => {
    // Save scrollY to restore position on iOS Safari.
    // https://github.com/willmcpo/body-scroll-lock/issues/237#issuecomment-954804479
    getHtml().style.scrollBehavior = "auto";
    scrollY = window.scrollY;

    disableBodyScroll(target);

    document.body.style.setProperty("top", `${window.scrollY * -1}px`);
  };

  const enableScroll = (target) => {
    if (scrollY == null) return;

    enableBodyScroll(target);

    document.body.style.setProperty("top", "");
    document.body.scrollTo(0, scrollY);
    getHtml().style.scrollBehavior = "";
  };

  function getHtml() {
    return document.querySelector("html");
  }
}

function bootstrapToc() {
  function getVisibleBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    const hasNoHeight = rect.top === rect.bottom;
    if (hasNoHeight) {
      return getVisibleBoundingClientRect(element.parentNode);
    }
    return rect;
  }

  function isInViewportTopHalf(boundingRect) {
    return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
  }

  function getAnchors({
    anchorsContainerSelector,
    minHeadingLevel,
    maxHeadingLevel,
  }) {
    const selectors = [];
    for (let i = minHeadingLevel; i <= maxHeadingLevel; i += 1) {
      selectors.push(`${anchorsContainerSelector} h${i}`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
  }

  function getActiveAnchor(anchors, { anchorTopOffset }) {
    const nextVisibleAnchor = anchors.find((anchor) => {
      const boundingRect = getVisibleBoundingClientRect(anchor);
      return boundingRect.top >= anchorTopOffset;
    });

    if (nextVisibleAnchor) {
      const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
      if (isInViewportTopHalf(boundingRect)) {
        return nextVisibleAnchor;
      }
      return anchors[anchors.indexOf(nextVisibleAnchor) - 1] ?? null;
    }
    return anchors[anchors.length - 1] ?? null;
  }

  function getLinkAnchorValue(link) {
    return decodeURIComponent(link.href.substring(link.href.indexOf("#") + 1));
  }

  function getLinks(linkClassName) {
    return Array.from(document.getElementsByClassName(linkClassName));
  }

  const linkClassName = "TableOfContents__item";
  const linkActiveClassName = "TableOfContents__active";
  const anchorsContainerSelector = ".Markup";
  const minHeadingLevel = 2;
  const maxHeadingLevel = 4;

  let anchorTopOffset = 0;
  let lastActiveLink = undefined;

  function updateLinkActiveClass(link, active) {
    if (active) {
      if (lastActiveLink && lastActiveLink !== link) {
        lastActiveLink.classList.remove(linkActiveClassName);
      }
      link.classList.add(linkActiveClassName);
      lastActiveLink = link;
    } else {
      link.classList.remove(linkActiveClassName);
    }
  }

  function updateActiveLink() {
    const links = getLinks(linkClassName);
    const anchors = getAnchors({
      anchorsContainerSelector,
      minHeadingLevel,
      maxHeadingLevel,
    });
    const activeAnchor = getActiveAnchor(anchors, {
      anchorTopOffset: anchorTopOffset,
    });
    const activeLink = links.find(
      (link) => activeAnchor && activeAnchor.id === getLinkAnchorValue(link)
    );

    links.forEach((link) => {
      updateLinkActiveClass(link, link === activeLink);
    });
  }

  document.addEventListener("scroll", updateActiveLink);
  document.addEventListener("resize", updateActiveLink);

  updateActiveLink();

  return () => {
    document.removeEventListener("scroll", updateActiveLink);
    document.removeEventListener("resize", updateActiveLink);
  };
}

bootstrapDialog();
bootstrapToc();
