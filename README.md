# j [![Build Status](https://travis-ci.org/akenn/j.svg?branch=master)](https://travis-ci.org/akenn/j)

> A small, jquery-like library

This is still very much a work in progress. I'm writing this for learning and for fun.

## Examples

```js
var $ = require('j');

var $div = $('<div>');
$div.addClass('header');

$(document.body).append($div);

console.log($('body div').hasClass('header'));
//=> true
```
