const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output:{
        filename: 'index.bundle.js',
        path: path.join(__dirname,'dist'),
        publicPath: ''
    },
    module:{
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.(woff|woff2|eot|ttf|svg)$/, use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: '[path][name].[ext]',
                        publicPath: 'asset/img/'
                    }
                }
            ]},
            {test: /\.css$/, use: [
                {loader: 'style-loader'},
                {loader: 'css-loader', options: { importLoaders: 1 }}
            ]}
        ]
    }
}

