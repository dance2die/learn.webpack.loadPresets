const path = require("path");
const webpack = require("webpack");

module.exports = ({ mode }) => ({
  mode,
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[chunkhash].js"
  }
});
