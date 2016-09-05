var stringWidth = require("./stringWidth.js");
var Presenter = require("./Presenter.js");

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
        return this.cutter.excute();
    },

    setStringWidth: function() {
        this.stringWidth = function(width) {
            return stringWidth(this.el, width);
        }.bind(this);
    },

    setCutter: function() {
        var cutter;

        if (this.option.path) {
            cutter = new PathCutter(this.option.pathSeparator);
        } else {
            cutter = new BaseCutter();
        }

        cutter.setText(this.option.newText);
        cutter.setPresenter(new Presenter(this.option.newText, this.option.replace));
        cutter.setReplace(this.option.replace);
        cutter.setWidth(this.option.width);
        cutter.setPosition(this.option.position);
        cutter.setStringWidth(this.stringWidth);

        this.cutter = cutter;
    }
};

module.exports = Ellipsis;