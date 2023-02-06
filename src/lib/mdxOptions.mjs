import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkCodeTitles from "./remark/remarkCodeTitles.mjs";
import remarkAdmonitions from "./remark/remarkAdmonitions.mjs";
import remarkImgToJsx from "./remark/remarkImgToJsx.mjs";
import { options as rehypePrettyCodeOptions } from "./rehype/rehypePrettyCode.mjs";

/** @type {import('@mdx-js/mdx').CompileOptions} */
const mdxOptions = {
  remarkPlugins: [
    remarkGfm,
    remarkDirective,
    remarkAdmonitions,
    remarkImgToJsx,
  ],
  rehypePlugins: [
    rehypeExternalLinks,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        properties: {
          ["aria-hidden"]: false,
          ["tab-index"]: false,
          ["class"]: "hash-link",
        },
      },
    ],
    [rehypePrettyCode, rehypePrettyCodeOptions],
  ],
};

export default mdxOptions;
