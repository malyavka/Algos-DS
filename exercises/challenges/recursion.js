// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if (exponent === 0) {
        return 1;
    }
    exponent--;
    return base * power(base,exponent )
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if (num === 0) {
        return 1;
    }
    return num * factorial(num-1)

}