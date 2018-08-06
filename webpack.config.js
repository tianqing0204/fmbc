const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name]-[chunk-hash:5].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.scss|\.css/,
                loaders: [
                    {
                        loader: 'style'
                    },
                    {
                        loader: 'css'
                    },
                    {
                        loader: 'sass'
                    },
                    {
                        loader: 'postcss'
                    }
                ]
            },
            {
                test: /\.jsx|\.js/,
                use: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.sass']
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            title: '分秒必猜',
            favicon: 'favicon.ico'
        }),
        new cleanWebpackPlugin(['dist'])
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase: './dist/',
        port: '8080',
        open: true
    }
};
