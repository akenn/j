'use strict';

describe('Methods', function() {
  describe('addClass', function() {
    it('should add a classname to the element\'s classname', function () {
      var div = $('<div>');

      div.addClass('className1');
      assert.equal('className1', div.el.className);

      div.addClass('className2');
      assert.equal('className1 className2', div.el.className);
    });

    it('should do nothing when no classname is provided', function () {
      var div = $('<div>');
      var originalClassname = div.el.className;
      var $div = $('<div>').addClass('');
      assert.equal(originalClassname, div.el.className);
    });

    it('should do nothing when the classname already exists', function () {
      var div = $('<div>').addClass('className1');
      var originalClassname = div.el.className;
      var $div = $('<div>').addClass('className1');
      assert.equal(originalClassname, div.el.className);
    });
  });

  describe('parent', function() {
    it('should return the parent node', function () {
      var parent = $('<div>');
      var child = $('<div>');
      parent.append(child);

      assert.equal(child.parent().el, parent.el);
    });
  });

  describe('closest', function() {
    it('should find the closest parent given a valid selector', function () {
      var parent = $('<div>').addClass('parent');
      var child1 = $('<div>').addClass('child');
      var child2 = $('<div>').addClass('child');
      child1.append(child2);
      parent.append(child1);

      assert.equal(child2.closest('.child').el, child1.el);
      assert.equal(child2.closest('.parent').el, parent.el);
    });
  });

  describe('remove', function() {
    it('should remove a child node from its parent', function () {
      var parent = $('<div>');
      var child1 = $('<div>');
      parent.append(child1);

      assert.equal(child1.el.parentNode, parent.el);
      assert.equal(parent.el.childNodes.length, 1);

      parent.remove(child1);

      assert.notEqual(child1.el.parentNode, parent.el);
      assert.equal(parent.el.childNodes.length, 0);
    });

    it('should remove itself from the dom if called without arguments', function () {
      var parent = $('<div>');
      var child1 = $('<div>');
      parent.append(child1);

      assert.equal(child1.el.parentNode, parent.el);
      assert.equal(parent.el.childNodes.length, 1);

      child1.remove();

      assert.notEqual(child1.el.parentNode, parent.el);
      assert.equal(parent.el.childNodes.length, 0);
    });
  });
});
