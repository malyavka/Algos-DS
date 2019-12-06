function binarySearch(arr, val, start = 0, end = arr.length-1){
    // Base Condition
    if (start > end) return -1;

    // Find the middle index
    let mid=Math.floor((start + end)/2);

    // Compare mid with given key val
    if (arr[mid]===val) return mid;

    // If element at mid is greater than val,
    // search in the left half of mid
    if(arr[mid] > val)
        return binarySearch(arr, val, start, mid-1);
    else

    // If element at mid is smaller than val,
    // search in the right half of mid
        return binarySearch(arr, val, mid+1, end);
}


module.exports = binarySearch;