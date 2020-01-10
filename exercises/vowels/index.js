// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    str = str.toLowerCase();
    let counter = 0;
    const map = {
        a: 'a',
        e: 'e',
        o: 'o',
        i: 'i',
        u: 'u'
    };
    for (let i = 0; i < str.length; i++){
        if (str[i] in map){
            counter++;
        }
    }
    return counter;
}
module.exports = vowels;
