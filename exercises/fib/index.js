// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib3(n) {
    if (n < 2) {
        return n;
    }
    return fib (n-1) + fib(n-2)
}
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
    // add whatever parameters you deem necessary - good luck!
    if (num === 1) {
        return 1
    }
    else if (num === 2) {
        return 1
    } else {
        return fib(num-1) + fib(num-2)

    }
}
module.exports = fib;
