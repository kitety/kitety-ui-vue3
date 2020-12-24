const path = require("path");
const resolve = (filePath) => path.join(__dirname, "./", filePath);

module.exports = {
  outputDir: "docs",
  publicPath: "./",
  devServer: { port: "3366" },
  pages: {
    index: {
      entry: resolve("story/main.ts"),
      template: "public/index.html",
      filename: "index.html",
      title: "kitety-ui-vue3",
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch-index").delete("preload-index");
    config.resolve.alias.set("story", resolve("story"));
  },
};
