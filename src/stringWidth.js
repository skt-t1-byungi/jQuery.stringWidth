var context = document.createElement("canvas").getContext("2d");

/**
 * @function
 * @param  {object} el  - HTMLElement
 * @param  {string} str - target string
 * @return {integer}    - calculated width
 */
module.exports = function(el, str) {

    if (!el) {
        new Error("stringWidth : required element param");
    }

    if (!str) {
        new Error("stringWidth : required string param");
    }

    if (typeof str !== 'string' && !str.toString) {
        throw new Error("stringWidth : current param is not stringify.");
    }

    if (typeof str !== 'string' && str.toString) {
        (console.warn || console.log)("stringWidth : current param is not string, but has 'toString()'");
    }

    var styles = window.getComputedStyle(el);

    context.font = styles.fontStyle + ' ' + styles.fontVariant + ' ' + styles.fontWeight + ' ' + styles.fontSize + ' / ' + styles.lineHeight + ' ' + styles.fontFamily;

    var result = context.measureText(str.replace(/^\s+/gm, '').replace(/\s+$/, ' ')).width,
        spacing = parseInt(styles.letterSpacing);

    if (isFinite(spacing)) {
        result += spacing * str.length;
    }

    return result;
};