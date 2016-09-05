var Presenter = function(replace) {
    this.replace = replace;
};

Presenter.prototype = {

    toFront: function(text, limitLength) {
        return this.replace + text.substr(text.length - limitLength - 1, limitLength);
    },

    toMiddle: function(text, limitLength) {
        var preLen = limitLength / 2,
            afterLen = preLen + (limitLength % 2);

        return text.substr(0, preLen) + this.replace + text.substr(text.length - afterLen - 1, afterLen);
    },

    toAfter: function(text, limitLength) {
        return text.substr(0, limitLength) + this.replace;
    },
};

module.exports = Presenter;