function arraySum(arr1, arr2) {
    const n = arr1.length;
    const m = arr2.length;
    
    let k = m - 1;
    while (arr2.length < n){
        k++;
        arr2.push(arr2[k%m]);
    }
    const sum = [];
    for (let i = 0; i<arr1.length; i++){
        sum.push(arr1[i]+arr2[i]);
    }
    return sum;
}
module.exports = arraySum
