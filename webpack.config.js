const path = require("path");
const webpack = require("webpack");
const OfflinePlugin = require("offline-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/template/index.html")
    }),
    new OfflinePlugin({
      externals: ["/"],
      caches: {
        main: [
          'index.html',
          'index.js',
          'dist/index.html',
          'dist/index.js',
        ],
      },
      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
        publicPath: '/sw.js'
      },
    })
  ]
};