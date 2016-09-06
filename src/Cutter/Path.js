var BaseCutter = require("./Base.js");

/**
 * @class
 * @extends Cutter/Base
 */
var Path = function() {};

Path.prototype = Object.create(BaseCutter.prototype);

module.exports = Path;