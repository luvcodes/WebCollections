// var arr = new Array(); // 创建一个空数组
// var arr2 = [1, 2, 3, 4, 5];
// 求数组[2,6,1,7,4]里面所有元素的和以及平均值
var arr = [2, 6, 1, 7, 4];
var sum = 0;
var avg = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
avg = sum / arr.length;
console.log("Sum value: ", sum);
console.log("Average value: ", avg);
