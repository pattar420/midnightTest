const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd();
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: [ path.join(CURRENT_WORKING_DIR , '/src/server/express.js') ],
    target: "node",
    output: {
      path: path.join(CURRENT_WORKING_DIR , '/dist/'),
      filename: "server.generated.js",
      publicPath: '/dist/',
      libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
    module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
          type: 'asset'
          },
          {
          test: /\.css$/i,
          use: [ stylesHandler, 'css-loader'
          ]
          }
    ]
    }
}

module.exports = config
