var a = 18;
f1();
function f1() {
    var b = 9;
    console.log(a);
    console.log(b);
    var a = '123';
}

// 相当于下面代码
var a;
function f1() {
    var b 
    var a;
    b = 9;
    console.log(a);
    console.log(b);
    a = '123';
}
a = 18;
f1();