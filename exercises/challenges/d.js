function countUniqueValues(arr){
    const counter = {}
    for (let i = 0; i < arr.length; i ++) {
        if (!counter[arr[i]]) counter[arr[i]] = 1;
        else counter[arr[i]]++;
    }return Object.keys(counter).length;
}