var stringWidth = require("./stringWidth.js");

//Cutters..
var BaseCutter = require("./Cutter/Base.js");
var PathCutter = require("./Cutter/Path.js");

var Ellipsis = function(el, option) {
    this.el = el;
    this.option = option;

    // this.stringWidth = null;
    // this.cutter = null;

    this.setStringWidth();
    this.setCutter();
};

Ellipsis.prototype = {

    getResult: function() {
        this.cutter.excute(this.option.newText);
    },

    setStringWidth: function() {
        this.stringWidth = function(width) {
            return stringWidth(this, width);
        }.bind(this);
    },

    setCutter: function() {
        var cutter;

        if (this.option.path) {
            cutter = new PathCutter(this.option.pathSeparator);
        } else {
            cutter = new BaseCutter();
        }

        cutter.setReplace(this.option.replace);
        cutter.setWidth(this.option.width);
        cutter.setPosition(this.option.position);
        cutter.setStringWidth(this.stringWidth);

        this.cutter = cutter;
    }
};

module.exports = Ellipsis;