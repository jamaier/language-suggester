import { counter } from '../src/js/counter.js';

describe('counter', () => {

  test('return false when input is not a number', () => {
    const number = "string";
    const result = counter(number);
    expect(result).toEqual(false);
  });
});