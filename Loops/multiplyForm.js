var str = '';
// 外层循环控制行数
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        // console.log(j + " * " + i + " = " + (j*i));
        str += j + "x" + i + " = " + j*i + '\t';
    }
    str += '\n';
}
console.log(str);