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

    guessSuitableLength: function(text) {
        return Math.floor(this.option.getWidth() / (this.stringWidth(text) / text.length) - this.option.getReplaceLength());
    },

    excute: function() {

        if (this.isAllowLength(this.option.get('text'))) {
            return this.option.get('text');
        }

        var assumeLen = this.guessSuitableLength(this.option.get('text')),
            parsedText = this.present(assumeLen);


        //find suitable..
        var prevParsedText;

        do {
            //store prev text..
            prevParsedText = parsedText;

            assumeLen++;
            parsedText = this.present(assumeLen);

        } while (this.isAllowLength(parsedText));

        return prevParsedText ? prevParsedText : parsedText;
    }
};

module.exports = Base;