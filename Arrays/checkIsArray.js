function reverse(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}
console.log(reverse([1,2,3]));
console.log(reverse(1,2,3));
// 检测是否为数组
// (1) instanceof 运算符 它可以用来检测是否为数组
var arr = [];
console.log(arr instanceof Array);