const compressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = env => ({
  plugins: [new compressionWebpackPlugin()]
});
