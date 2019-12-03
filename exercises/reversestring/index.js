// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
/** Solution with FOR LOOP
function reverse(str) {
    let returnedStr = '';
    for (let i = str.length-1; i >= 0; i--){
        returnedStr += str[i];
    }
    return returnedStr;
}
**/
function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

module.exports = reverse;
