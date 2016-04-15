'use strict';

global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
global.expect = global.chai.expect;
global.assert = global.chai.assert;

global.$ = require('../');

require('./polyfills');

beforeEach(function() {
  this.sandbox = global.sinon.sandbox.create();
});

afterEach(function() {
  this.sandbox.restore();
})
