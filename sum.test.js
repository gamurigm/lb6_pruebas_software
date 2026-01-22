import { sum, multiply } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 5 to equal 4', () => {
    expect(sum(-1, 5)).toBe(4);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

