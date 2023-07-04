/**
 * 
 * 新数组用于存放筛选之后的数据
 * 遍历原来数组
 */
var arr = [2,0,66,1,77,0,52,0,25,7];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        newArr[newArr.length] = arr[i];
    }
}
console.log(newArr);