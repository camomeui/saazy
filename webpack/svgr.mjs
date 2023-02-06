export default {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        svgo: false,
      },
    },
  ],
};
