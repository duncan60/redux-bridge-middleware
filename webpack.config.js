var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true',
        './src/app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new DashboardPlugin({ port: 3000})
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    }
};
