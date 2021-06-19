/* const path = require("path")
const { BrowserRouter } = require("react-router-dom")
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const nodeExternals = require('webpack-node-externals')


let config = [{
  name: 'browser',
    mode: 'development',
    entry: path.join(__dirname, '/src/client/main.js'),
    output: {
        path: path.resolve(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/dist/',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                exclude: /node_modules/,
                type: 'asset'
            },
            {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
              {
                loader: 'style-loader'
              },
                'css-loader'
          ],
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
},
{
  name: 'server',
  mode: 'development',
  entry: path.join(__dirname, '/src/server/express.js'),
  output: {
    path: path.resolve(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2'
},
externals: [ nodeExternals() ], 
module: {
    rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
            exclude: /node_modules/,
            type: 'asset'
        },
        {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
            'css-loader'
      ],
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
]

module.exports = config */