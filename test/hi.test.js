const { greetings } = require('../dist/hi');

describe('hi', () => {
  describe('greetings', () => {
    it('should be hi,world!', () => {
      expect(greetings('world')).toEqual('hi,world!');
    });
  });
});
