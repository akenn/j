# jli [![Build Status](https://travis-ci.org/akenn/jli.svg?branch=master)](https://travis-ci.org/akenn/jli)

> A small, jquery-like library

This is still very much a work in progress. I'm writing this for learning and for fun.

## Install

```
$ npm install jli
```

## Usage

```js
var $ = require('jli');

var $div = $('<div>');
$div.addClass('header');

$(document.body).append($div);

console.log($('body div').hasClass('header'));
//=> true
```

## API

#### `$(selector)`

> Finds an existing element on the dom or creates a new one

Options:

- `selector` - string or instance of `$`

#### `.append(element)`

> Adds an element as a child node

Options:

- `element` - DOM node or instance of `$`

#### `.remove(element)`

> Removes the `element` provided from the parent or, if called without arguments, removes the current `$` element from the dom

Options:

- `element` (optional) - DOM node or instance of `$`

#### `.hasClass(className)`

> Returns `true` if the current `$` element has the provided `className`

Options:

- `className` - string

#### `.addClass(className)`

> Adds a class to the current `$` element

Options:

- `className` - string

#### `.removeClass(className)`

> Removes a class from the current `$` element

Options:

- `className` - string

#### `.html(html)`

> Either replaces the `innerHTML` of the current `$` element with `html` or, if called without arguments, returns the `innerHTML` of the current `$` element

Options:

- `html` (optional) - string

#### `.text(text)`

> Either replaces the `innerHTML` of the current `$` element with html-escaped `text` or, if called without arguments, returns the `innerHTML` of the current `$` element

Options:

- `text` (optional) - string

#### `.parent()`

> Returns the parent node of the current `$` element

#### `.closest(selector)`

> Returns the closest parent node of the current `$` element matching the given selector
