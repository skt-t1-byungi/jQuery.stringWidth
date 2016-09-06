//fn
var strip = require('strip');
var stringWidth = require("./stringWidth.js");

//class
var Option = require("./Option.js");

//factory
var PresentFactory = require("./PresentFactory.js");

//Cutters..
var BaseCutter = require("./Cutter/Base.js");
var PathCutter = require("./Cutter/Path.js");

/**
 * @class
 */
var Ellipsis = function(el, option) {
    this.el = el;
    this.option = new Option(option);

    this.setStringWidth();
    this.setCutter();
};

Ellipsis.prototype = {

    getResult: function() {
        return this.option.removeReplaceWidthTagIfTagged(this.cutter.excute());
    },

    setStringWidth: function() {
        this.stringWidth = function(str) {

            str = this.option.removeReplaceIfTagged(str);

            //strip tags if useHtml
            if (this.option.get('useHtmlReplace')) {
                str = strip(str);
            }

            return stringWidth(this.el, str);

        }.bind(this);
    },

    setCutter: function() {
        var cutter;

        if (this.option.get('path')) {
            cutter = new PathCutter(this.option.pathSeparator);
        } else {
            cutter = new BaseCutter();
        }

        cutter.setOption(this.option);
        cutter.setStringWidth(this.stringWidth);
        cutter.setPresent(PresentFactory(this.option));

        this.cutter = cutter;
    },

};

module.exports = Ellipsis;