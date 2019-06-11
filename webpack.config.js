const path = require("path");
const webpack = require("webpack");

const loadPresets = require("./build-utils/loadPresets");
const loadModes = mode => require(`./build-utils/webpack.${mode}`)(mode);

const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

module.exports = ({ mode = "production", presets = [] }) =>
  merge(
    {
      mode,
      output: {
        path: path.join(__dirname, "./dist"),
        filename: "default-bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    loadModes(mode),
    loadPresets({ mode, presets })
  );
