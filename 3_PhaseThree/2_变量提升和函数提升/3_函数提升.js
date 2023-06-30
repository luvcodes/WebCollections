// 1. 会把所有函数声明提升到当前作用域的最前面
// 2. 只提升函数声明，不提升函数调用
// fn();
// function fn() {
//     console.log('函数提升');
// }

fun();
var fun = function() {
    console.log('函数表达式');
}
// 函数表达式 必须先声明