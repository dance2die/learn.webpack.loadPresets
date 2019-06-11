const webpackMerge = require("webpack-merge");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = env => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigurations = mergedPresets.map(preset =>
    require(`./presets/webpack.${preset}`)(env)
  );

  return webpackMerge({}, ...mergedConfigurations);
};
