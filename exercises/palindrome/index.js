// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    if (str.length === 1 || str.length === 0) return true;
    else if (str[0] === str[str.length-1]) {
        console.log(str[0], str[str.length-1]);
        console.log(str.slice(1,str.length-1));
        return palindrome(str.slice(1, str.length-1))
    }
    return false;
}

module.exports = palindrome;
