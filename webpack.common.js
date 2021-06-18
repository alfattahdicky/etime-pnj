const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    home: "./src/script/home.js"
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "fonts",
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img/",
            publicPath: "img/",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: "./src/index.html",
      chunks: ["index", "home"],
    }),
    new HtmlWebpackPlugin({
      filename: "iot.html",
      template: "./src/page/iot.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "rmi.html",
      template: "./src/page/rmi.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "plc.html",
      template: "./src/page/plc.html",
      chunks: ["index"],
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/favicon",
          to: "./favicon",
        },
        {
          from: "./src/assets/pdf",
          to: "./pdf",
        },
      ],
    }),
  ],
};
