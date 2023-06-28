// 1. 利用箭头函数来求和
const getSum = (...arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const result = getSum(2, 3);
console.log(result);