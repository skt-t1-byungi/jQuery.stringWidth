var $ = require("jquery");
var Ellipsis = require("./Ellipsis.js");

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

    if (!option.newText) {
        option.newText = this.text();
    }

    var instance = new Ellipsis(this.get(0), option);

    this.text(instance.getResult());
};