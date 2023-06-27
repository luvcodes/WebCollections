// 简单的写法
// function outer() {
//     let a = 10;
//     function fn() {
//         console.log(11);
//     }
//     fn();
// }
// outer();

// 常见的闭包形式 外部可以访问使用 函数内部的变量
// function outer() {
//     let a = 10;
//     function fn() {
//         console.log(a);
//     }
//     return fn
// }
// outer();

// 外面要使用这个 10 

// 闭包的应用 统计函数调用的次数
let i = 0;
function fn() {
    i++;
    console.log(`函数被调用了${i}次`);
}
fn();