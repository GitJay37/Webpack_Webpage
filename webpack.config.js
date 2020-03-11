const path = require('path');
const HtmlWpckPlugin = require('html-webpack-plugin'); 

const htmlWpck = new HtmlWpckPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
}); 

module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join( __dirname, ('..') ),
        filename: 'dist/javascript/bundle.js'   
    },
    plugins: [htmlWpck],
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
}