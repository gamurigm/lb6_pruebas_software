/**
 * Calculates the factorial of a number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of n.
 */
export function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Calculates the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 */
export function fibonacci(n) {
    if (n < 0) return undefined;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
