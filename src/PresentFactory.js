/**
 * @class
 */
var Present = function(option) {
    this.option = option;

    switch (this.option.get('position')) {
        case 'front':
            return this.toFront;
        case 'middle':
            return this.toMiddle;
        case 'after':
            return this.toAfter;
        default:
            return this.toNumber;
    }
};

Present.prototype = {

    toFront: function(limit) {
        return this.option.getReplaceOrWithTagged() + this.option.getText().substr(this.option.getText().length - limit - 1).trim();
    },

    toMiddle: function(limit) {
        var preLen = Math.floor(limit / 2),
            afterLen = preLen + (limit % 2);

        var str = this.option.getText().substr(0, preLen).trim() +
            this.option.getReplaceOrWithTagged() +
            this.option.getText().substr(this.option.getText().length - afterLen).trim();

        return str;
    },

    toAfter: function(limit) {
        return this.option.getText().substr(0, limit).trim() + this.option.getReplaceOrWithTagged();
    },

    toNumber: function(limit) {
        var str;

        if (this.option.get('position') > 0) {
            str =
                this.option.getText().substr(0, this.option.get('position')).trim() +
                this.option.getReplaceOrWithTagged() +
                this.option.getText().substr(this.option.getText().length - limit + this.option.get('position') + this.option.getReplaceLength()).trim();
        } else {
            str =
                this.option.getText().substr(0, limit - (this.option.getReplaceLength() - this.option.get('position'))).trim() +
                this.option.getReplaceOrWithTagged() +
                this.option.getText().substr(this.option.getText().length + this.option.get('position')).trim();
        }

        return str;
    },
};

/**
 * factory
 */
module.exports = function(option) {
    return new Present(option);
};