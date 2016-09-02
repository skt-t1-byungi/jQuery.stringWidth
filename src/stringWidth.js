var context = document.createElement("canvas").getContext("2d");

module.exports = function(el, str) {
    if (typeof str !== 'string' && !str.toString) {
        throw new Error("stringWidth : current param is not stringify.");
    }

    if (typeof str !== 'string' && str.toString) {
        (console.warn || console.log)("stringWidth : current param is not string, but has 'toString()'");
    }

    var styles = window.getComputedStyle(el);

    context.font = styles.fontStyle + ' ' + styles.fontVariant + ' ' + styles.fontWeight + ' ' + styles.fontSize + ' / ' + styles.lineHeight + ' ' + styles.fontFamily;

    return context.measureText(str.replace(/^\s+/gm, '').replace(/\s+$/, ' ')).width;
};