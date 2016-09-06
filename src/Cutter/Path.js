var BaseCutter = require("./Base.js");
var PresentFactory = require("../PresentFactory.js");
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

        //change option for filename
        this.option.setText(this.getFilename());
        this.option.set('position', -this.option.getExtension().length);

        console.log(this.option.getExtension().length);

        //change present
        this.setPresent(PresentFactory(this.option));

        //excute
        return this.findByLoop();
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