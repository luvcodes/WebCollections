var num = 10;
fun();

function fun() {
    console.log(num);
    var num = 20;
}

// 相当于执行了以下操作
var num;
function fun() {
    var num;
    console.log(num);
    num = 20;
}
num = 10;
fun();