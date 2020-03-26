const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractSass = new MiniCssExtractPlugin({
    filename: 'dist/css/[name].[contenthash].css',
    allChunks: true
});


module.exports = merge(common,{
    mode: 'production',
    output:{
        publicPath: '.'
    },

    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
        {
            test: /\.scss$/i,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                esModule: true,
                },
            },
            'css-loader',
            'sass-loader'
            ],
        },
        ],
    },
});

/*
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: 
                    [
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ]
                })
            },

            {
                test: /.\html$/,
                use:[
                    {loader: 'html-loader'}
                ]
            }
        ]
    },
    plugins: [extractSass]
});

*/