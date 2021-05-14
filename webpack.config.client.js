const path = require("path")
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()


const config = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    name: 'browser',
    entry: path.join(CURRENT_WORKING_DIR, "/src/main.js"),
    
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: "client.js"
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
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/
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