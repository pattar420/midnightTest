const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd();
const webpack = require('webpack')




const config = {
    entry: [ path.join(CURRENT_WORKING_DIR , '/src/server/express.js') ],
    target: "node",
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
          use: [
            {
              loader: 'style-loader'
            },
            'css-loader'
          ]
          }
    ]
    }
}

module.exports = config