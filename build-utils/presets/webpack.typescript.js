// const webpackMerge = require("webpack-merge");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = env => {
  return webpackMerge(
    // A presets common configuration details
    {},
    // Any mode specific capabilities for that preset
    { production: {}, development: {} }[env.mode]
  );
};
