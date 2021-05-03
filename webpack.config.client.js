const path = require("path")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const src = path.resolve(__dirname, 'src');
const CURRENT_WORKING_DIR = process.cwd()


const config = {
    name: 'browser',
    entry: path.join(src + "client"),
    plugins: [new MiniCssExtractPlugin()],
    devtool: 'eval-source-map',
    
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: "client.js"
    },
    module: {
        rules: [ 
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                type: 'asset'
              },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 
                    {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', { modules: false }],
                        '@babel/preset-react'
                      ],
                    },
                }
                ]
            }
        ]
    }
}

module.exports = config