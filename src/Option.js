var strip = require('strip');

var REPLACE_WIDTH_TAG_PATTERN = "<replaceFixed>:replace</replaceFixed>";

/**
 * get filename from path
 * @private
 * @param  {string} path      
 * @param  {string} separator   - default "/"
 * @return {string}
 */
var filename = function(path, separator) {
    separator = separator || '/';
    var separated = path.split(separator);
    return separated[separated.length - 1];
};

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

    set: function(name, value) {
        this.data[name] = value;
    },

    getText: function() {
        return this.data.newText;
    },

    setText: function(value) {
        this.data.newText = value;
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
        if (this.isReplaceWidth()) {
            return 0;
        }

        if (this.get('useHtmlReplace')) {
            return strip(this.get('replace')).length;
        }

        return this.get('replace').length;
    },

    getFilename: function() {
        return filename(this.getText(), this.get('pathSeparator'));
    },

    getExtension: function() {
        var separated = this.getFilename().split('.');
        return separated[separated.length - 1];
    }
};

module.exports = Option;