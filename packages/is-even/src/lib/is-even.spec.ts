import { isEven } from './is-even';

describe('isEven', () => {
  it('reports even numbers as even', () => {
    expect(isEven(42)).toEqual(true);
    expect(isEven(0)).toEqual(true);
    expect(isEven(-4)).toEqual(true);
  });
  it('reports odd numbers as not even', () => {
    expect(isEven(43)).toEqual(false);
    expect(isEven(1)).toEqual(false);
    expect(isEven(-3)).toEqual(false);
  });
});
