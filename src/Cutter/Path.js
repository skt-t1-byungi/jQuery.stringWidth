var BaseCutter = require("./Base.js");
var Presenter = require("../Presenter.js");
var extend = require('extend'); // for mixins..
var parentProps = BaseCutter.prototype;

/**
 * @class
 * @extends Cutter/Base
 */
var Path = function() {};

extend(Path.prototype, parentProps, {

    resetOptionExceptFilename: function() {
        var fname = this.getFilename();

        this.option.set('width', this.option.get('width') - this.stringWidth(fname));

        this.option.setText(this.option.getText().replace(new RegExp(fname + '$'), ''));
    },

    getFilename: function() {
        return this.option.get('pathSeparator') + this.option.getFilename();
    },

    excuteAboutFilename: function() {

        //change origin text
        this.option.setText(this.getFilename());

        //chnage present
        this.setPresent(function(limit) {
            return (new Presenter(this.option)).extract('number')(-(this.option.getExtension().length + 1), limit);
        });

        //excute
        return parentProps.excute.call(this);
    },

    excute: function() {

        if (this.isAllowLength(this.option.getText())) {
            return this.option.getText();
        }

        var fname = this.getFilename();

        //about filename..
        if (!this.isAllowLength(fname)) {
            return this.excuteAboutFilename();
        }

        //reset option
        this.resetOptionExceptFilename();

        return this.findByLoop() + fname;
    }

});

module.exports = Path;