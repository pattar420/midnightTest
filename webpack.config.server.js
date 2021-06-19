const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd();
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
    name: "server",
    mode: 'development',
    entry: [path.join(CURRENT_WORKING_DIR , '/src/server/express.js')],
    target: "node",
    output: {
      path: path.join(CURRENT_WORKING_DIR , '/dist/'),
      filename: "server.generated.js",
      publicPath: '/dist/',
      libraryTarget: "commonjs2"
    },
    externals: [ nodeExternals() ],
    plugins: [
    new MiniCssExtractPlugin()
  ],
    module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ]
        },
        {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
        exclude: /node_modules/
      },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
          type: 'asset'
          }
    ]
    }
}

module.exports = config
