export const options = {
  theme: "github-dark",
  keepBackground: false,
  onVisitLine(node) {
    // https://rehype-pretty-code.netlify.app/#:~:text=//%20Prevent%20lines%20from,be%20copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};
