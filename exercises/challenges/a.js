function sameFrequency(num1, num2){
    const str1 = num1.toString();
    const str2 = num2.toString();
    const counter = {};
    for (let i = 0; i < str1; i++) {
        if (counter[str1[i]]) {
            counter[str1[i]]++;
        }else {
            counter[str1[i]] = 1;
        }
    }
    for (let j = 0; j < str2.length; j++) {
        if (!counter[str2[j]]) {
            return false;
        }else {
            counter[str2[j]]--;
        }
    }
    return true;
}
