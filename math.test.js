import { factorial, fibonacci } from './math.js';

describe('Math functions', () => {
    test('factorial of 5 should be 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('factorial of 0 should be 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('fibonacci of 6 should be 8', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('fibonacci of 10 should be 55', () => {
        expect(fibonacci(10)).toBe(55);
    });
});
