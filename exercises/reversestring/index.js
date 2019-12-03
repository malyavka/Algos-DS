// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG

/** SOLUTION with REDUCE method**/
function reverse (str) {
    return str
        .split('')
        .reduce((rev, char) => char + rev, '');
}
/** Solution with FOR LOOP
function reverse(str) {
    let returnedStr = '';
    for (let i = str.length-1; i >= 0; i--){
        returnedStr += str[i];
    }
    return returnedStr;
}

 **Solution with built-in
 *
function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}
**/
module.exports = reverse;
