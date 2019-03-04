const webpack=  require('webpack');

module.exports = {
    entry: './ex/index.js',

    output: {
        ppath: __dirname +  '/public',
        filename: './bundle.js        '
    },
     
    devServer:  {
        port: 8080,
        contentBase: './public'
    }
}