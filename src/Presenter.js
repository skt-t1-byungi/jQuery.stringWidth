var Presenter = function(text, replace) {
    this.text = text;
    this.replace = replace;
};

Presenter.prototype = {

    toFront: function(limit) {
        return this.replace.trim() + this.text.substr(this.text.length - limit - 1, limit);
    },

    toMiddle: function(limit) {
        var preLen = Math.floor(limit / 2),
            afterLen = preLen + (limit % 2);

        return this.text.substr(0, preLen).trim() + this.replace + this.text.substr(this.text.length - afterLen - 1, afterLen).trim();
    },

    toAfter: function(limit) {
        return this.text.substr(0, limit).trim() + this.replace;
    },

    byPositionNumber: function(positionNum, limit) {
        return "asdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
    }
};

module.exports = Presenter;