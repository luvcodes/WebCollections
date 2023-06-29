const arr1 = [1, 2, 3];
// 展开运算符 可以展开数组
console.log(...arr);

console.log(Math.max(1, 2, 3));
// 1. 求数组最大值
console.log(Math.max(...arr));
console.log(Math.min(...arr));

// 2. 合并数组
const arr2 = [3,4,5];
const arr = [...arr1, ...arr2];