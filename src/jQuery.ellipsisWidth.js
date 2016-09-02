var $ = require("jquery");
var stringWidth = require("./stringWidth.js");

var DEFAULT_OPTION = {
    //newText: "블라블라..",
    replace: '...',
    position: 'after', //   front|middle|after
    path: false,
    pathSeparator: '/'
};



$.fn.elipsisWidth = function(param) {

    //set option..
    var option = {};

    if (typeof param === 'number') {
        $.extend(option, DEFAULT_OPTION, {
            width: param
        });
    } else {
        $.extend(option, DEFAULT_OPTION, param);
    }

    if (!option.width) {
        option.width = this.width();
    }

    //text
    var originText = option.newText || this.text();

    //



};