var FIND_LOOP_LIMIT = 30;

/**
 * @class
 */
var Base = function() {};

Base.prototype = {

    setOption: function(option) {
        this.option = option;
    },

    setStringWidth: function(stringWidth) {
        this.stringWidth = stringWidth;
    },

    setPresent: function(present) {
        this.present = present;
    },

    isAllowLength: function(text) {
        return this.stringWidth(text) <= this.option.getWidth();
    },

    guessSuitableLength: function() {
        var charWidth = this.stringWidth(this.option.getText()) / this.option.getText().length;
        return Math.floor(this.option.getWidth() / charWidth - this.option.getReplaceLength());
    },

    excute: function() {
        if (this.isAllowLength(this.option.getText())) {
            return this.option.getText();
        }

        return this.findByLoop();
    },

    findByLoop: function() {
        var assumeLen = this.guessSuitableLength(),
            parsedText = this.present(assumeLen);

        var prevParsedText, i = 0;
        do {
            //loop limit..
            if (i++ === FIND_LOOP_LIMIT) {
                break;
            }

            //store prev text..
            prevParsedText = parsedText;

            assumeLen++;
            parsedText = this.present(assumeLen);

        } while (this.isAllowLength(parsedText));

        return prevParsedText ? prevParsedText : parsedText;
    }
};

module.exports = Base;