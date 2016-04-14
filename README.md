# j

> A small, jquery-like library

This is still very much a work in progress. I'm writing this for learning and for fun.

## Examples

```js
var $ = require('j');

var $div = $('<div>');
$div.addClass('header');

$(document.body).append($div);

console.log($('document div').hasClass('header'));
//=> true
```
