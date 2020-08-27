const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: "production",
  entry: "./dev/scripts/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./scripts/main.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./dev/index.ejs",
      filename: "./index.html",
      minify: false,
    }),

    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./dev/images", to: "./images" },
        { from: "./dev/css", to: "./css" },
        { from: "./dev/fonts", to: "./fonts" },
      ],
    }),
  ],

  devServer: {
    port: 9999,
    contentBase: path.join(__dirname, "dist"),
    compress: false,
  },
};
