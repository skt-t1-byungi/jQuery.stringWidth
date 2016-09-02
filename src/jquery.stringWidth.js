var $ = require("jquery");
var stringWidth = require("./stringWidth.js");

$.fn.stringWidth = function(str) {
    return stringWidth(this.get(0), str);
};