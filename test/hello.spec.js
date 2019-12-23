const { describe, it } = require('mocha');
const { expect } = require('chai');

const { greetings } = require('../dist/hello');

describe('hello', () => {
  describe('greetings', () => {
    it('should be hello,world!', () => {
      expect(greetings('world')).to.equal('hello,world!');
    });
  });
});
