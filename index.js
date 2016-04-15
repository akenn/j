'use strict';

var $ = function(selector, options) {
  if (!(this instanceof $)) {
    return new $(selector, options);
  }

  // TODO detect <div>, <img>, etc better and build correct type
  if (typeof selector === 'string' && selector.indexOf('<') === 0) {
    selector = document.createElement('div');
  }

  if (typeof selector === 'object' && 'nodeType' in selector) {
    this.el = selector;
  } else {
    this.el = document.querySelector(selector);
  }

  return this;
}

$.prototype.append = function(element) {
  if (!this.el) {
    return;
  }

  if (element instanceof $) {
    element = element.el;
  }

  return this.el.appendChild(element);
}

$.prototype.hasClass = function(className) {
  if (!className || !this.el || !this.el.className) {
    return false;
  }

  return this.el.className.split(' ').indexOf(className) > -1;
}

$.prototype.addClass = function(className) {
  if (this.el && !this.hasClass(className)) {
    var classes = this.el.className.split(' ').filter(function(n){ return n !== '' });
    this.el.className = classes.concat([className]).join(' ');
  }

  return this;
}

$.prototype.removeClass = function(className) {
  if (this.el && this.hasClass(className)) {
    var classes = this.el.className.split(' ').filter(function(n){ return n !== '' });
    classes.splice(classes.indexOf(className), 1);
    this.el.className = classes.join(' ');
  }

  return this;
}

$.prototype.html = function(html) {
  if (!html) {
    return this.el.innerHTML;
  }

  this.el.innerHTML = html;

  return this;
}

$.prototype.text = function(text) {
  if (!text) {
    return this.el.innerHTML;
  }

  // odd way of escaping html
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  text = div.innerHTML;

  return this.html(text);
}

$.prototype.closest = function(selector) {
  if (!selector) {
    return null;
  }

  function isRoot(node) {
    return !node || !node.parentNode;
  }

  var curNode = this.el;

  while (curNode && !isRoot(curNode) && !curNode.matches(selector)) {
    curNode = curNode.parentNode;
  }

  return isRoot(curNode) ? null : curNode;
}

module.exports = $;