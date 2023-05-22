/**
 * 将数组 [2,0,6,1,77,0,52,0,25,7] 中大于等于10的元素选出来，放入新数组
 * 
 * 方法一: 
 * 声明新数组用于存放新数据
 * 遍历旧数组，找出大于等于10的元素
 * 依次追加给新数组
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

// 方法二: 
var arr1 = [2,0,6,1,77,0,52,0,25,7];
var newArr1 = [];
var j = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 10) {
        // 新数组应该从0开始 依次递增
        newArr1[newArr1.length] = arr1[i];
        j++;
    }
}
console.log(newArr1);