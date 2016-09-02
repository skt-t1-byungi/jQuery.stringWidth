var $ = require("jquery");
var stringWidth = require("./stringWidth.js");

var DEFAULT_OPTION = {
    //newText: "blah..",
    replace: '...',
    position: 'after', //   front|middle|after
    path: false,
    pathSeparator: '/'
};

$.fn.ellipsisWidth = function(param) {

    //multiple elem recursive
    if (this.length > 1) {

        this.each(function(i, el) {
            $(el).ellipsisWidth(param);
        });

        return this;
    }

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

    //calc estimate Length
    var curStrWidth = stringWidth(this.get(0), originText),
        estimateLen = Math.floor(option.width / (curStrWidth / originText.length));

    console.log(estimateLen);


};