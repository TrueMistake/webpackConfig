const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./script.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/assets/'),
          to: path.resolve(__dirname, 'dist/assets/')
        }
      ]
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
    ]
  }
}