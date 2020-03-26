const path = require('path');
const HtmlWpckPlugin = require('html-webpack-plugin'); 

const htmlWpck = new HtmlWpckPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
}); 

module.exports = {
    stats: {
        children: false
    },
    entry: './assets/javascript/entry.js',
    devtool: 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join( __dirname, ('..') ),
        filename: 'dist/javascript/bundle.js'   
    },
    plugins: [htmlWpck],
    module: {
        rules: [
                        
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'url-loader',
            }
        ]
    },
}
