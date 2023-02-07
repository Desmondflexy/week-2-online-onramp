function numSwap(number) {
    const str = number.toString();
    if (str.length % 2 != 0) return 'number length is not even.';
    arr = [];
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str[i+1], str[i]);
    }
    return Number(arr.join(''));
}

module.exports = numSwap
