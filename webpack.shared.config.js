module.exports = {
    mode: process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css']
    }
}