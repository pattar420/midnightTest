const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd();



const config = {
    entry: path.join(CURRENT_WORKING_DIR + "/src/client/App.js"),
    devtool: 'eval-source-map',
    name: 'browser',
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: "[name].js"
    },
    plugins: [new HtmlWebPackPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ "babel-loader"]
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                type: 'asset'
              }
        ]
    },
    name: "server",
    entry: [ path.join(CURRENT_WORKING_DIR , './src/server/express.js') ],
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
            type: 'asset'
          }
    ]
    }
}

module.exports = config