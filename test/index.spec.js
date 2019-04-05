const { describe, it } = require('mocha');
const { expect } = require('chai');

const { hello } = require('../lib');

describe('index', () => {
  describe('hello', () => {
    it('should be world', () => {
      expect(hello()).to.equal('world');
    });
  });
});
