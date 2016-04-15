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
});
