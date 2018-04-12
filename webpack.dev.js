'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(
    commonConfig,
    {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: './lib/static',
            inline: true,
            hot: true,
            proxy: {
                '/events': 'http://localhost:8000',
                '/images': 'http://localhost:8000',
                '/init': 'http://localhost:8000',
                '/load': 'http://localhost:8000',
                '/run': 'http://localhost:8000',
                '/save': 'http://localhost:8000',
                '/update-reference': 'http://localhost:8000'
            }
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
);
