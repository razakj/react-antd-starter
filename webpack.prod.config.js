const merge                     = require('webpack-merge');
const common                    = require('./webpack.common');

const webpack                   = require('webpack');
const path                      = require('path');

const UglifyJsPlugin            = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin   = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin         = require('html-webpack-plugin');

module.exports                  = merge(common, {
    mode                : "production",
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache       : true,
                parallel    : true,
                sourceMap   : true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins             : [
        new HtmlWebpackPlugin({
            title           : 'App',
            template        : './templates/prod.html'
        })
    ]
});