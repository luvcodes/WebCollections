// 添加 删除数组元素方法
// 1. push() 在我们的数组的末尾 添加一个或者多个数组元素
var arr = [1,2,3];
// arr.push(4, 'pink');
// console.log(arr.push(4, 'pink'));
// console.log(arr);

// (1) push 是可以给数组追加新的元素
// (2) push() 参数可以直接写 数组元素就可以了
// (3) push完毕之后，返回的结果是 新数组的长度
// (4) 原数组也会发生变化
// 2. unshift 在数组的开头 添加一个或者多个数组
arr.unshift('red', 'purple');
console.log(arr);
// (1) unshift是可以给数组前面追加新的元素
// (2) unshift() 参数直接写 数组元素就可以了
// (3) unshift完毕之后，返回的结果是 新数组的长度
// (4) 原数组也会发生变化

// 3. pop 它可以删除数组的最后一个元素
console.log(arr.pop());
console.log(arr);
// (1) pop是可以删除数组的最后一个元素 记住一次只能删除一个元素
// (2) pop() 没有参数
// (3) pop完毕之后，返回的结果是 删除的那个元素
// (4) 原数组也会发生变化