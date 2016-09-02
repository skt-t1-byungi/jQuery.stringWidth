var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

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
        new UglifyJsPlugin()
    ]
};