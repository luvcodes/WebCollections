/**
 * 将数组 [2,0,6,1,77,0,52,0,25,7] 中大于等于10的元素选出来，放入新数组
 */
var arr = [2,0,6,1,77,0,52,0,25,7];
var newArr = [];
var j = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        // 新数组应该从0开始 依次递增
        newArr[j] = arr[i];
        j++;
    }
}
console.log(newArr);