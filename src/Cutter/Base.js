var Base = function() {
    // this.position = "middle";
    // this.replace= '...';
    // this.presenter = null;
    // this.stringWidth = null;
    // this.width = 0;
};

Base.prototype = {

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
                return presenter.byNumber.bind(presenter);
        }
    },

    excute: function(newText) {

        if (this.isSuitableText(newText)) {
            return newText;
        }

        var assumeLen = this.getSuitableLength(newText),
            present = this.getPresent();

        var parseText;
        do {
            parseText = present(newText, assumeLen);
        } while (true);

    }
};

module.exports = Base;