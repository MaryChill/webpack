const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {test:/\.css$/,
            use: [
                MiniCSSExtractPlugin.loader,
                'css-loader'
                ],
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            },
            {
            test: /\.html$/,
            loader: 'html-loader',
            }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css',
        })
    ]
}
