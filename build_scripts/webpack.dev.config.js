const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: [
            require.resolve('webpack/hot/dev-server'),
            path.join(__dirname,'../src/index.js')
        ]
    },
    output:{
        filename: 'index.bundle.js',
        path: path.join(__dirname,'../dist'),
        publicPath: ''
    },
    resolve:{
        extensions: ['.js','.vue']
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: require.resolve('babel-loader'),
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10240,
                            name: '[path][name].[ext]',
                            publicPath: '../asset/img/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: require.resolve('style-loader')},
                    {loader: require.resolve('css-loader'), options: { importLoaders: 1 }}
                ]
            },
            {
                test:/\.scss$/,
                use: [
                    {loader: require.resolve('style-loader')},
                    {loader: require.resolve('css-loader')},
                    {loader: require.resolve('sass-loader')}
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {loader: require.resolve('vue-loader')}
                ]
            },
            {
                test: /\.(html|tpl)$/,
                use: [
                    {loader: require.resolve('html-loader')}
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        progress: true
    }
}

