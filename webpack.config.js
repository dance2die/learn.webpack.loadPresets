const path = require("path");
const webpack = require("webpack");

const configurationModes = mode =>
  require(`./build-utils/webpack.${mode}`)(mode);

const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

module.exports = ({ mode }) =>
  merge(
    {
      mode,
      output: {
        path: path.join(__dirname, "./dist"),
        filename: "default-bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    configurationModes(mode)
  );
