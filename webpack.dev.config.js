const merge                     = require('webpack-merge');
const common                    = require('./webpack.common');

const webpack                   = require('webpack');
const path                      = require('path');

const HtmlWebpackPlugin         = require('html-webpack-plugin');

module.exports                  = merge(common, {
    mode                : "development",
    devServer           : {
        contentBase         : path.resolve(__dirname, 'public'),
        historyApiFallback  : true
    },
    plugins             : [
        new HtmlWebpackPlugin({
            title           : 'App',
            template        : './templates/dev.html'
        })
    ]
});