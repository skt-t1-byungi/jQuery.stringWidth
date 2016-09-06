jQuery.ellipsisWidth
==============================
jQuery plugin for dynamic ellipsis effect (not used css),
and stringWidth. (bonus)

Browser support
---
IE 9 <= *

Usage
---
HTML source
```html
<div style="width:100px;">ABCDEFGHIJKPQRSTUVWXYZ</div>
```
Script source
```js
$("div").ellipsisWidth();
// |----100px---|
// ABCDEFGHIJ...
```

## options
### width
```js
$("div").ellipsisWidth(50);
//or
$("div").ellipsisWidth({
    width:50
});
// |-50px-|
// ABCD...
```
### newText
```js
$("div").ellipsisWidth({
    newText:"AAAAAAAAAAAAAAAAAAAA"
});
// AAAAAAAAAA...
```
### replace
```js
$("div").ellipsisWidth({
    replace:"***" // default "..."
});
// ABCDEFGHIJ***
```
### useHtmlReplace
```js
$("div").ellipsisWidth({
    replace:"<span>...</span>",
    useHtmlReplace:true //default false
});
// ABCDEFGHIJ<span>...</span>
// (no escape..)
```

### replaceWidth
```js
$("div").ellipsisWidth({
    replace: "",
    replaceWidth: 30
});
// |--70px--|-30px-|
// ABCDEFGHI
```
### position
```js
$("div").ellipsisWidth({
    position:"middle" // "front"|"middle"|"after"|Number, default "after"
});
// ABCD...VWXY

$("div").ellipsisWidth({
    position:"front"
});
// ...RSTUVWXYZ

$("div").ellipsisWidth({
    position:3
});
// ABC...UVWXYZ

$("div").ellipsisWidth({
    position:-2
});
// ABCDEFG...YZ
```

### path
```html
<div style="width:100px;">C:/INNOMFT/webapp/boot/app/dispatchTransfer/test.zip</div>
<div style="width:100px;">C:/INNOMFT/webapp/boot/app/dispatchTransfer/test12345aaav22.zip</div>
```
```js
$("div").ellipsisWidth({
    path: true, //default false
    position:"after"
});
// C:/IN.../test.zip
// /test1234...zip
```
path mode is firstly filename

### pathSeparator
```html
<div style="width:100px;">C:\INNOMFT\webapp\boot\app\dispatchTransfer\test.zip</div>
```
```js
$("div").ellipsisWidth({
    path: true,
    pathSeparator: "\\" //default "/"
});
// C:\IN...\test.zip
```
### rerenderOnResize
```js
$("div").ellipsisWidth({
    rerenderOnResize: true, //default false
});
```
excute rerender on browser resize.

### can be mixed
```js
$("div").ellipsisWidth({
    width: 130,
    replace:'<img src="/ellips.gif" width="20">',
    useHtmlReplace:true,
    position: "middle"
});
```
bonus) stringWidth
---
```js
$("span").stringWidth("test");
// 15px, no render.
$("span").text("test").width();
// 15px, get after renderred
```

but, recommend is..
---
```css
div{
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
 }
 ```
 used css. css is better... -_-*