var ucfirst = require('ucfirst');

/**
 * @class
 */
var Presenter = function(option) {
    this.option = option;
};

Presenter.prototype = {

    ofFront: function(limit) {
        return this.option.getReplaceOrWithTagged() + this.option.getText().substr(this.option.getText().length - limit - 1).trim();
    },

    ofMiddle: function(limit) {
        var preLen = Math.floor(limit / 2),
            afterLen = preLen + (limit % 2);

        return this.option.getText().substr(0, preLen).trim() + this.option.getReplaceOrWithTagged() + this.option.getText().substr(this.option.getText().length - afterLen - 1, afterLen).trim();
    },

    ofAfter: function(limit) {
        return this.option.getText().substr(0, limit).trim() + this.option.getReplaceOrWithTagged();
    },

    ofNumber: function(positionNum, limit) {
        var str;

        if (positionNum > 0) {
            str =
                this.option.getText().substr(0, positionNum).trim() +
                this.option.getReplaceOrWithTagged() +
                this.option.getText().substr(this.option.getText().length - limit + positionNum + this.option.getReplaceLength()).trim();
        } else {
            str =
                this.option.getText().substr(0, limit - (this.option.getReplaceLength() - positionNum)).trim() +
                this.option.getReplaceOrWithTagged() +
                this.option.getText().substr(this.option.getText().length + positionNum).trim();
        }

        return str;
    },

    extract: function(fnName) {
        return this['of' + ucfirst(fnName.toLowerCase())].bind(this);
    }

};

module.exports = Presenter;