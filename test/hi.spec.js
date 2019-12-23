const { describe, it } = require('mocha');
const { expect } = require('chai');

const { greetings } = require('../dist/hi');

describe('hi', () => {
  describe('greetings', () => {
    it('should be hi,world!', () => {
      expect(greetings('world')).to.equal('hi,world!');
    });
  });
});
