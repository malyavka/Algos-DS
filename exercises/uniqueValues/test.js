const countUniqueValues = require('./index.js');

test('countUniqueValues function exists', () => {
    expect(typeof countUniqueValues).toEqual('function');
});
test('countUniqueValues counts the unique values in the array', () => {
    const arr = [1,1,1,1,1,2];
    const counted = countUniqueValues(arr);

    expect(counted).toEqual(2);
});

test('countUniqueValues counts the unique values in the array', () => {
    const arr = [1,2,3,4,4,4,4,7,7,12,12,12,13];
    const counted = countUniqueValues(arr);

    expect(counted).toEqual(7);
});

test('countUniqueValues counts the unique values in the array', () => {
    const arr = [-17, -8, 0, 9, 10];
    const counted = countUniqueValues(arr);

    expect(counted).toEqual(5);
});