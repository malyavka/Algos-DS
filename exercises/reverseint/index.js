// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = n
        .toString()
        .split('')
        .reverse()
    if (str[0] === '0' && str.length > 1) str = str.slice(1);
    if (str[str.length-1]  === '-') {
        str.unshift(str.pop())
    }
    return parseInt(str.join(''));

}

module.exports = reverseInt;
