const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = mode => ({
  output: {
    path: path.join(__dirname, "../build-prod"),
    filename: "[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
