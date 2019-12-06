// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const counter = {};
    stringA = stringA
        .toLowerCase()
        .replace(/[^\w]/g, '');
    stringB = stringB
        .toLowerCase()
        .replace(/[^\w]/g, '');

    for (let i = 0; i < stringA.length; i++) {
        if (counter[stringA[i]])
        {
            counter[stringA[i]]++;
        }
        else
        {
            counter[stringA[i]] = 1;
        }
    }
    for (let i = 0; i < stringB.length; i++) {
        if (counter[stringB[i]])
        {
            counter[stringB[i]]--;
        }
        else
        {
            counter[stringA[i]] = 1;
        }
    }
    for (let key in counter) {
        if (counter[key] !== 0) {
            return false;
        }
    }
    return true;

}

module.exports = anagrams;
