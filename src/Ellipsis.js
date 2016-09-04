var stringWidth = require("./stringWidth.js");

var Ellipsis = function(el, option) {
    this.el = el;
    this.option = option;

    this.setStringWidth();
};

Ellipsis.prototype = {

    getResult: function() {

    },

    setStringWidth: function() {
        this.stringWidth = function(width) {
            return stringWidth(this, width);
        }.bind(this);
    }
};

module.export = Ellipsis;