const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const loadPresets = require("./build-utils/loadPresets");
const loadModes = mode => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = env =>
  merge(
    {
      mode: env.mode,
      output: {
        path: path.join(__dirname, "./dist"),
        filename: "default-bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    loadModes(env.mode)
    // loadPresets(env)
  );
