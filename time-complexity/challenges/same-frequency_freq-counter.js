function sameFrequency(num1, num2) {
    const lookup = {};
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) return false;
    for(let num of num1) {
        lookup[num] = lookup[num] ? lookup[num] += 1 : lookup[num] = 1
    }
    for(let num of num2) {
        if(!lookup[num]) {
            return false;
        }
        lookup[num] -= 1;
    }
    return true;
}

console.log(sameFrequency(1222123, 1222321));