var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

// webpack.config.js
module.exports = {
    entry: {
        stringWidtdh: './src/jQuery.stringWidth.js',
        elipsisWidth: './src/jQuery.elipsisWidth.js'
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