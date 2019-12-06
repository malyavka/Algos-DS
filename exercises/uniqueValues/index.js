// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always be sorted


//countUniqueValues([1,1,1,1,1,2]) // 2
//countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,12,13]) // 7



function countUniqueValues(arr){
    const counter = {};
    for (let i = 0; i < arr.length; i ++) {
        if (!counter[arr[i]]) counter[arr[i]] = 1;
        else counter[arr[i]]++;
    }
    return Object.keys(counter).length;
}

module.exports = countUniqueValues;