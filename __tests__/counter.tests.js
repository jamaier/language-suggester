import { counter } from '../src/js/counter.js';

describe('counter', () => {

  test('return false when input is not a number', () => {
    const number = "string";
    const result = counter(number);
    expect(result).toEqual(false);
  });
});

test('should return output equal to input.', () => {
  const number = 10;
  const result = counter(number);
  expect(result).toEqual(10);
})

// test('should return the amount of quarters')