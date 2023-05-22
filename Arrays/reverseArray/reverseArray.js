/**
 * 将数组['red', 'green', 'blue', 'pink', 'purple']的内容反过来存放
 */

var arr = ['red', 'green', 'blue', 'pink', 'purple'];
var newArr = [];
for (var i = arr.length - 1; i >= 0; i--) {
    newArr[newArr.length] = arr[i];
}
console.log(newArr);