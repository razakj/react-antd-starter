const webpack                   = require('webpack');
const path                      = require('path');

const CleanWebpackPlugin        = require('clean-webpack-plugin');
const MiniCssExtractPlugin      = require("mini-css-extract-plugin");

module.exports = {
    devtool             : 'source-map',
    entry               : {
        app             : ['@babel/polyfill', './src']
    },
    output              : {
        filename            : 'app.js',
        path                : path.resolve(__dirname, 'dist')
    },
    module              : {
        rules           : [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test        : /\.less$/,
                include     : path.resolve(__dirname, 'node_modules/antd'),
                use         : [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {
                        modules : false
                    }},
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test        : /\.css$/,
                exclude     : path.resolve(__dirname, 'node_modules/antd'),
                use         : [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {
                        localIdentName: '[name]__[local]',
                        modules : true
                    }},
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins             : [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename        : "app.css",
            chunkFilename   : "[id].css"
        })
    ]
};