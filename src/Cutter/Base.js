var Base = function() {
    // this.position = "middle";
};

Base.prototype = {

    setWidth: function(width) {
        this.width = width;
    },

    setReplace: function(replace) {
        this.replace = replace;
    },

    setPosition: function(positon) {
        this.position = position;
    },

    setStringWidth: function(stringWidth) {
        this.stringWidth = stringWidth;
    },

    excute: function(newText) {

        var currentWidth = this.stringWidth(newText);

        if (currentWidth <= this.width) {
            return newText;
        }

        var assumeLen = this.width / (this.stringWidth(newText) / newText.length);


    }
};

module.exports = Base;