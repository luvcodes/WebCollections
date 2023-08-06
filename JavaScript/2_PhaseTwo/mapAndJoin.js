// map可以遍历数组处理数据，并且返回新的数组
const arr = ['red', 'blue', 'green'];
// map也称为映射。map重点在于有返回值，forEach没有返回值。
const newArr = arr.map(function (ele, index) {
    console.log(ele); // 数组元素
    console.log(index); // 数组索引号
    return ele + '颜色';
})
console.log(newArr);

// 2. join()方法用于把数组中的所有元素转换一个字符串
// 小括号为空则逗号分割
console.log(newArr.join()); 
// 小括号是空字符串，则元素之间没有分隔符
console.log(newArr.join(''));
console.log(newArr.join('|'));
