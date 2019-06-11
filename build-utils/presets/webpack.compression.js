const CompressionWebpackPlugin = require("compression-webpack-plugin");

// https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a
const compressionOptions = {
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 512,
  minRatio: 0.8
};

module.exports = () => ({
  plugins: [new CompressionWebpackPlugin(compressionOptions)]
});
