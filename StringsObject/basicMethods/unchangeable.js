// 字符串的不可变性
var str = 'andy';
console.log(str);

str = 'red';
console.log(str);

// 因为字符串的不可变性所以不要大量的拼接字符串
var str = '';
for (var i = 1; i <= 10; i++) {
    str += i;
}
console.log(str);