var ucfirst = require('ucfirst');

/**
 * @class
 */
var Presenter = function(option) {
    this.option = option;

    this.text = this.option.getText();
    this.replace = this.option.getReplaceOrWithTagged();
};

Presenter.prototype = {

    ofFront: function(limit) {
        return this.replace + this.text.substr(this.text.length - limit - 1, limit).trim();
    },

    ofMiddle: function(limit) {
        var preLen = Math.floor(limit / 2),
            afterLen = preLen + (limit % 2);

        return this.text.substr(0, preLen).trim() + this.replace + this.text.substr(this.text.length - afterLen - 1, afterLen).trim();
    },

    ofAfter: function(limit) {
        return this.text.substr(0, limit).trim() + this.replace;
    },

    ofNumber: function(positionNum, limit) {
        var str;

        if (positionNum > 0) {
            str =
                this.text.substr(0, positionNum) +
                this.replace +
                this.text.substr(this.text.length - limit + positionNum + this.option.getReplaceLength());
        } else {
            str =
                this.text.substr(0, limit - (this.option.getReplaceLength() - positionNum)) +
                this.replace +
                this.text.substr(this.text.length + positionNum);
        }

        return str;
    },

    extract: function(fnName) {
        return this['of' + ucfirst(fnName.toLowerCase())].bind(this);
    }

};

module.exports = Presenter;