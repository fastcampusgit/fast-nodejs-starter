import { greetings } from './hello';

describe('hello', () => {
  describe('greetings', () => {
    it('should be hello,world!', () => {
      expect(greetings('world')).toEqual('hello,world!');
    });
  });
});
