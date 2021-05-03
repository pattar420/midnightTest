const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd();
const webpack = require('webpack')
const src = path.resolve(__dirname, 'src');



const config = {
    entry: [ path.join(CURRENT_WORKING_DIR , './src/server/express.js') ],
    target: "node",
    plugins: [new MiniCssExtractPlugin()],
    output: {
      path: path.join(CURRENT_WORKING_DIR , '/dist/'),
      filename: "server.generated.js",
      publicPath: '/dist/',
      libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
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
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
    ]
    }
}

module.exports = config