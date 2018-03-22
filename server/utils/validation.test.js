const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

  it('Should reject non-string', () => {
    expect(isRealString(12345)).toBe(false);
  });

  it('Should reject empty string', () => {
    expect(isRealString('')).toBe(false);
  });

  it('Should allow string with nonSpace char', () => {
    expect(isRealString('L O T R')).toBe(true);
  });

});
