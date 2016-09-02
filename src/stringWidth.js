var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

module.exports = function(el, str) {
    var styles = window.getComputedStyle(el);
    context.font = styles.fontStyle + ' ' + styles.fontVariant + ' ' + styles.fontWeight + ' ' + styles.fontSize + ' / ' + styles.lineHeight + ' ' + styles.fontFamily;
    return context.measureText(str).width;
};