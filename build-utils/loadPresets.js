const webpackMerge = require("webpack-merge");

const applyPresets = env => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigurations = mergedPresets.map(preset =>
    require(`./presets/webpack.${preset}`)(env)
  );

  console.log(`mergedPresets`, mergedPresets, `env`, env);
  return webpackMerge({}, mergedConfigurations);
};

module.exports = applyPresets;
