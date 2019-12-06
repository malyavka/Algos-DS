const binerySearch = require('./index');

test('BinerySearch is a function', () => {
    expect(typeof binerySearch).toEqual('function');
});

test('BinerySearch returns an index if a target value is in the array', () => {
    let arr = [1, 3, 5, 7, 8, 9];
    let x = 5;
    expect(binerySearch(arr, x)).toEqual(2)
});

test('BinerySearch returns an index if a target value is in the array', () => {
    let arr = [-19, -18, 1, 3, 5, 80, 600, 2000];
    let x = 2000;
    expect(binerySearch(arr, x)).toEqual(7)
});

test('BinerySearch returns -1 if a target value is not in the array', () => {
    let arr = [-19, -18, -7, 0, 2, 5, 8, 9, 88];
    let x = 89;
    expect(binerySearch(arr, x)).toEqual(-1)
});