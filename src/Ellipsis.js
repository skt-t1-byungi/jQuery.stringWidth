var striptags = require('striptags');

var stringWidth = require("./stringWidth.js");
var Presenter = require("./Presenter.js");

//Cutters..
var BaseCutter = require("./Cutter/Base.js");
var PathCutter = require("./Cutter/Path.js");

//cosnt
var REPLACE_MARK_PATTERN = "<fixed>:replace</fixed>";

var Ellipsis = function(el, option) {
    this.el = el;
    this.option = option;

    // this.makredReplace = null;
    this.initForReplaceWidth();

    // this.stringWidth = null;
    // this.cutter = null;
    this.setStringWidth();
    this.setCutter();

};

Ellipsis.prototype = {

    getResult: function() {
        var result = this.cutter.excute();

        if (this.markedReplace) {
            result = result.replace(this.markedReplace, this.option.replace);
        }

        return result;
    },

    initForReplaceWidth: function() {

        if (!this.option.replaceWidth) {
            return;
        }

        this.markedReplace = REPLACE_MARK_PATTERN.replace(':replace', this.option.replace);
    },

    setStringWidth: function() {
        this.stringWidth = function(str) {

            //remove replace if exists markedReplace
            if (this.markedReplace) {
                str = str.replace(this.markedReplace, '');
            }

            //strip tags if allow raw
            if (this.option.useRawReplace) {
                str = striptags(str);
            }

            return stringWidth(this.el, str); //remove tags..

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
        cutter.setReplace(this.option.replace);
        cutter.setPosition(this.option.position);
        cutter.setStringWidth(this.stringWidth);

        //whether exists markedReplace(replaceWidth)
        cutter.setPresenter(new Presenter(this.option.newText, this.markedReplace || this.option.replace));
        cutter.setWidth(this.option.width - (this.option.replaceWidth || 0));

        this.cutter = cutter;
    },

};

module.exports = Ellipsis;