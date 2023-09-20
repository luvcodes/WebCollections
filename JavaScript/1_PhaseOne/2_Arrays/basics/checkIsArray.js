function reverse(arr) {
    if (arr instanceof Array) {
        var newArr = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArr[newArr.length] = arr[i];
        }
    }
}
console.log(reverse([1,2,3]));
console.log(reverse(1,2,3));

// 检测是否为数组
// (1) instanceof 运算符 它可以用来检测是否为数组
var arr = [];
var obj = {};
console.log(arr instanceof Array);
console.log(obj instanceof Array);
// (2) Array.isArray(参数)
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));