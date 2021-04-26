const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')




module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                type: 'asset'
              }
        ]
    }
}