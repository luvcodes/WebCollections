function getSum(num1, num2) {
    return num1 + num2; // return后面的代码不会被执行
    alert('This line will not be executed');
}
console.log(getSum(1,2));

function fn(num1, num2) {
    return num1, num2; // 返回的结果是最后一个值
}
console.log(fn(1,2));

function getResult(num1, num2) {
    return [num1+num2, num1-num2, num1*num2, num1/num2];
}
var re = getResult(1,2); // 返回的是一个数组
console.log(re);

// 我们的函数如果有return 则返回的是return后面的值，如果函数没有return则返回undefined
function f1() {
    return 666;
}
console.log(f1()); // 返回666

function fun2() {

}
console.log(fun2()); // 返回undefined