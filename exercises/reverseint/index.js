// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
/** Naive solution
 **/
// function reverseInt(n) {
//     let str = n
//         .toString()
//         .split('')
//         .reverse()
//     if (str[0] === '0' && str.length > 1) str = str.slice(1);
//     if (str[str.length-1]  === '-') {
//         str.unshift(str.pop())
//     }
//     return parseInt(str.join(''));
//
// }

function reverseInt(n) {
    let str = n
        .toString()
        .split('')
        .reverse()
        .join('');

    /**
     * The Math.sign() function returns either a positive or negative +/- 1,
     * indicating the sign of a number passed into the argument.
     * If the number passed into Math.sign() is 0, it will return a +/- 0.
     * Note that if the number is positive, an explicit (+) will not be returned.
     */
    return parseInt(str) * Math.sign(n);
}

module.exports = reverseInt;
