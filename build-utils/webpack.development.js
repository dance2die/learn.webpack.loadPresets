const path = require("path");

module.exports = mode => ({
  output: {
    path: path.join(__dirname, "../build-dev"),
    filename: "dev-bundle.js"
  }
});
