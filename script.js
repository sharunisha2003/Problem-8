function missingNumber(n, arr) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        sum += arr[i];
    }
    const expectedSum = (n * (n + 1)) / 2;
    return expectedSum - sum;
}
const arr = [1, 2, 3, 5];
const n = 5;
const ans=missingNumber(n, arr)
console.log("The missing number in the given array is "+ans);