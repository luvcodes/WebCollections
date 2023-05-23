var num = 10;
function fun() {
    console.log(num);
    var num = 20;
    console.log(num);
}
fun();

// 相当于执行以下代码
// var num;
// function fun() {
//     var num;
//     console.log(num);
//     num = 20;
//     console.log(num);
// }
// num = 10;
// fun();