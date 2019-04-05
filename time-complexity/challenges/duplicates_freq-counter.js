function areThereDuplicates() {
    const arr = [...arguments];
    const lookup = {}
    for(let item of arr) {
        lookup[item] = (lookup[item] || 0) + 1
        if(lookup[item] > 1) return true
    };
    return false;
}

console.log(areThereDuplicates("a", "b", "c", "d", "d"));