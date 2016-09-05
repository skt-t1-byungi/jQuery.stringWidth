var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var BannerPlugin = require("webpack/lib/BannerPlugin");

// webpack.config.js
module.exports = {
    entry: {
        stringWidth: './src/jQuery.stringWidth.js',
        ellipsisWidth: './src/jQuery.ellipsisWidth.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'jQuery.[name].min.js',
        libraryTarget: "umd"
    },
    externals: {
        "jquery": "jQuery"
    },
    plugins: [
        new UglifyJsPlugin(),
        new BannerPlugin('jQuery.ellipsisWidth.js (with stringWidth) \nsertion@innorix.com\nhttps://github.com/skt-t1-byungi/jQuery.ellipsisWidth')
    ]
};