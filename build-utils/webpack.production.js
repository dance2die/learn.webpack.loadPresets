const path = require("path");

module.exports = mode => ({
  output: {
    path: path.join(__dirname, "../build-prod"),
    filename: "[chunkhash].js"
  }
});
