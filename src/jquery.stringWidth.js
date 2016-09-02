var $ = require("jquery");
var stringWidth = require("./stringWidth.js");


$.fn.stringWidth = function() {
    return stringWidth();
};