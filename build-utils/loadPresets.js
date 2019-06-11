const webpackMerge = require("webpack-merge");

const applyPresets = env => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigurations = mergedPresets.map(preset =>
    require(`./presets/webpack.${preset}`)
  );

  console.log(
    `mergedPresets`,
    mergedPresets,
    `mergedConfigurations`,
    mergedConfigurations
  );
  return webpackMerge({}, mergedConfigurations);
};

module.exports = applyPresets;
