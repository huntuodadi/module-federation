const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:20000/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 20000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Hotel app',
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: "hotel",
      library: { type: "var", name: "hotel" },
      filename: "hotel.js",
      exposes: {
        App: "./src/index"
      },
    })
  ]
}