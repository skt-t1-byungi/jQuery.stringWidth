var $ = require("jquery");
var Ellipsis = require("../Ellipsis.js");

var INSTANCE_SET_PROP = '_ellipsisWidthInstance';
var DEFAULT_OPTION = {
    //newText: "blah..",
    replace: '...',
    //replaceWidth: 50,
    useHtmlReplace: false,
    position: 'after', //   front|middle|after
    path: false,
    pathSeparator: '/',
    rerenderOnResize: false,
};

/**
 * render (by ralwReplace)
 * @param  {object} $el      jQuery Wrapped dom
 * @param  {object} instance Ellipsis
 */
function render($el, instance) {
    if (instance.option.get('useHtmlReplace')) {
        $el.html(instance.getResult());
    } else {
        $el.text(instance.getResult());
    }
}

//for rerenderOnResize;
var rerenderList = [];
$(window).resize(function() {

    if (rerenderList.length === 0) {
        return;
    }

    rerenderList.forEach(function($el) {

        if (!$.contains(document, $el.get(0))) {
            return;
        }

        render($el, $el.data(INSTANCE_SET_PROP));
    });
});

/**
 * @api
 */
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

    //remove empty char
    option.newText = option.newText.trim();


    //render
    var instance = new Ellipsis(this.get(0), option);
    render(this, instance);


    //set rerender
    if (option.rerenderOnResize) {
        this.data(INSTANCE_SET_PROP, instance);

        if (rerenderList.indexOf(this) === -1) {
            rerenderList.push(this);
        }
    } else {
        //remove if rerenderOnResize is false
        var searcedIndex = rerenderList.indexOf(this);

        if (searcedIndex > -1) {
            rerenderList.splice(searcedIndex, 1);
        }
    }

    //chainning
    return this;
};