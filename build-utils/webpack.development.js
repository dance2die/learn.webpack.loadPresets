const path = require("path");

module.exports = mode => ({
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "../build-dev"),
    filename: "dev-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
});
