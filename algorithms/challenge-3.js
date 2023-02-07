function increment(arr, value) {
    const z = [];
    for (let i = 0; i < arr.length; i++) {
        z.push({val: arr[i].val + value});
    }
    return z;
}
module.exports = increment;
