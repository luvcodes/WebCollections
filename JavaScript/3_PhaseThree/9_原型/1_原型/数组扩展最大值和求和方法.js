 // 自己定义 数组扩展方法 求和 和 最大值
 // 1. 我们定义的这个方法，任何一个数组实例对象都可以使用
 // 2. 自定义的方法写到 数组.prototype 身上
 // 1. 最大值
 const arr = [1,2,3];
 Array.prototype.max = function(arr) {
    // 展开运算符
    return Math.max(1,2,3)
 }
 console.log(arr.max());
// const arr = new Array(1, 2);
//  console.log(arr);