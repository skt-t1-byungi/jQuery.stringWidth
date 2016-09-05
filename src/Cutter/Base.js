var Base = function() {
    // this.position = "middle";
    // this.replace= '...';
    // this.presenter = null;
    // this.stringWidth = null;
    // this.width = 0;
};

Base.prototype = {

    setText: function(text) {
        this.text = text;
    },

    setWidth: function(width) {
        this.width = width;
    },

    setReplace: function(replace) {
        this.replace = replace;
    },

    setPresenter: function(presenter) {
        this.presenter = presenter;
    },

    setPosition: function(position) {
        this.position = position;
    },

    setStringWidth: function(stringWidth) {
        this.stringWidth = stringWidth;
    },

    isSuitableText: function(text) {
        return this.width >= this.stringWidth(text);
    },

    getSuitableLength: function(text) {
        return Math.floor(this.width / (this.stringWidth(text) / text.length) - this.replace.length);
    },

    getPresent: function() {
        var presenter = this.presenter;
        switch (this.position) {
            case 'front':
                return presenter.toFront.bind(presenter);
            case 'middle':
                return presenter.toMiddle.bind(presenter);
            case 'after':
                return presenter.toAfter.bind(presenter);
            default:
                return function(limit) {
                    return presenter.byPositionNumber.bind(presenter)(this.position, limit);
                };
        }
    },

    excute: function() {

        if (this.isSuitableText(this.text)) {
            return this.text;
        }

        var assumeLen = this.getSuitableLength(this.text),
            present = this.getPresent();

        var parsedText = present(assumeLen);
        var prevParsedText;

        do {
            //store preve text..
            prevParsedText = parsedText;

            assumeLen++;
            parsedText = present(assumeLen);

        } while (this.isSuitableText(parsedText));

        return prevParsedText ? prevParsedText : parsedText;
    }
};

module.exports = Base;