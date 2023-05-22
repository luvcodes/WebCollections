var arr = ["red", "green", "blue"];
console.log(arr.length);

/**
 * 1. 通过修改length长度新增数组元素，来实现数组扩容的目的
 */
arr.length = 7;
console.log(arr);
// 4，5，6的空间没有给值，所以默认都是undefined
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);

/**
 * 2. 新增数组元素 修改索引号 追加数组元素
 */
var arr1 = ["red", "green", "blue"];
arr1[3] = "pink";
arr1[4] = "hotpink";
// 修改元素
arr1[3] = "yellow";
console.log(arr1);

/**
 * 3. 新建一个数组，里面存放10个整数
 */
var arr2 = [];
for (var i = 0; i < 10; i++) {
  arr2[i] += i + 1;
}
console.log(arr2);
