const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./docs/scripts/queryjs.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          { 
            test: /\.s[ac]ss$/i, 
            use: [
              MiniCSSExtractPlugin.loader,
              "css-loader",
              "sass-loader",
              {
                loader: "sass-loader",
                options: {
                  includePaths: [path.resolve(__dirname, './node_modules')]
                }
              }
            ]
          }
        ]
      },
    plugins: [
      new HtmlWebpackPlugin({  
        filename: 'index.html',
        template: './index.html',
        hash: true
      }),
      new HtmlWebpackPlugin({  
        filename: 'index.html',
        template: './index.html',
        hash: true
      }),
      new MiniCSSExtractPlugin()
    ],
}