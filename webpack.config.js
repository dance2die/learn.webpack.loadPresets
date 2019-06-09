const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => ({
  mode,
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[chunkhash].js"
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
});
