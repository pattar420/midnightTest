const path = require("path")
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    name: 'browser',
    devtool: 'eval-source-map',
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    entry: [path.join(CURRENT_WORKING_DIR, "/src/client/main.js")],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    module: {
        rules: [ 
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                type: 'asset',
                exclude: /node_modules/
            },
            {
            test: /\.css$/i,
            use: [stylesHandler, 'css-loader'],
            exclude: /node_modules/
          },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    }
}

module.exports = config