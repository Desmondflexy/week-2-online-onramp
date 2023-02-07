function missingNumber(numArr) {
    const missing = [];
    for (let i = 1; i <= 9; i++) {
        if (!numArr.includes(i)) missing.push(i);
    }
    if (missing.length === 1) return missing[0];
    else if (missing.length > 1) return missing;
    else return false;
}
module.exports = missingNumber
