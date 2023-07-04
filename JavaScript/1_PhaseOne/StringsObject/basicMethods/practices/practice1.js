var str = "oabcoefoxyozzopp";
var index = str.indexOf("o");
var num = 0;
while (index != -1) {
    console.log(index);
    num++;
    index = str.indexOf('o', index+1);
}
console.log("O appeared: " + num);

// 课后作业 ['red', 'blue', 'red', 'green', 'pink', 'red], 求red出现

