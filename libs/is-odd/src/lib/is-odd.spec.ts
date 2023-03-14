import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('reports even numbers as not odd', () => {
    expect(isOdd(42)).toEqual(false);
    expect(isOdd(0)).toEqual(false);
    expect(isOdd(-4)).toEqual(false);
  });
  it('reports odd numbers as odd', () => {
    expect(isOdd(43)).toEqual(true);
    expect(isOdd(1)).toEqual(true);
    expect(isOdd(-3)).toEqual(true);
  });
});
