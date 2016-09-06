var REPLACE_WIDTH_TAG_PATTERN = "<replaceFixed>:replace</replaceFixed>";

/**
 * @class
 */
var Option = function(option) {
    this.data = option;
};

Option.prototype = {
    get: function(name) {
        return this.data[name];
    },

    getText: function() {
        return this.data.newText;
    },

    isReplaceWidth: function() {
        return !!this.get('replaceWidth');
    },

    removeReplaceWidthTagIfTagged: function(text) {
        if (this.isReplaceWidth()) {
            return text.replace(this.getReplaceWithTag(), this.get('replace'));
        }

        return text;
    },

    removeReplaceIfTagged: function(text) {
        if (this.isReplaceWidth()) {
            return text.replace(this.getReplaceWithTag(), '');
        }

        return text;
    },

    getReplaceWithTag: function() {
        return REPLACE_WIDTH_TAG_PATTERN.replace(':replace', this.get('replace'));
    },

    getWidth: function() {
        return this.isReplaceWidth() ? this.get('width') - this.get('replaceWidth') : this.get('width');
    },

    getReplaceOrWithTagged: function() {
        return this.isReplaceWidth() ? this.getReplaceWithTag() : this.get('replace');
    },

    getReplaceLength: function() {
        return this.isReplaceWidth() ? 0 : this.get('replace').length;
    }
};

module.exports = Option;