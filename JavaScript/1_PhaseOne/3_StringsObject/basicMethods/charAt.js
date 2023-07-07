var str = 'andy';
// 1. 根据位置返回字符
console.log(str.charAt(3));
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// 2. charCodeA(index) 返回相应索引号的字符ASCII值 目的：判断用户按下了哪个键？
console.log(str.charCodeAt(0));
// 3. str[index] H5新增的
console.log(str[0]);