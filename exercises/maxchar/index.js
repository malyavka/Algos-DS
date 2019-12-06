// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const counter = {};
    for (let i = 0; i < str.length; i++)
    {
        if (counter[str[i]]){
            counter[str[i]]++;
        }
        else {
            counter[str[i]] = 1;
        }
    }
    let max = 0;
    let returnedChar = '';
    for (let key in counter) {
        if (counter[key] > max) {
            max = counter[key];
            returnedChar = key;
        }
    }
    return returnedChar;
}


module.exports = maxChar;
