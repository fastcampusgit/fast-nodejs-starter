import { greetings } from './hi';

describe('hi', () => {
  describe('greetings', () => {
    it('should be hi,world!', () => {
      expect(greetings('world')).toEqual('hi,world!');
    });
  });
});
