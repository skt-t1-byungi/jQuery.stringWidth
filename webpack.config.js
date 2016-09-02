// webpack.config.js
module.exports = {
    entry: './src/jquery.stringWidth.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'jquery.stringWidth.js',
        libraryTarget: "umd"
    },
    externals: {
        "jquery": "jQuery"
    }
};