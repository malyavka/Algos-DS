// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//

// NAIVE
// function chunk(array, size) {
//     let result = [];
//     let sub = [];
//     for (let i = 0; i <= array.length; i++) {
//         if (sub.length === size || i === array.length) {
//             result.push(sub);
//             sub = []
//         }
//         sub.push(array[i])
//     }
//
//     return result;
// }

function chunk (array, size) {
    let index = 0;
    const result = [];

    while (index < array.length) {
        result.push(array.slice(index, index+size));
        index += size;
    }

    return result;
}

module.exports = chunk;
