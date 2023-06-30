f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}

// 以下代码
function f1() {
    var a;
    a = b = c = 9;
    // 相当于 var a = 9; b = 9; c = 9; // b和c的前面没有var，当全局变量看，a是局部变量。
    // 当变量在函数内定义，直接赋值了，没有写var，那么就会被当作全局变量看。
    // 集体声明 var a = 9, b = 9, c = 9; // 这样才是a，b，c都是有var的
    console.log(a);
    console.log(b);
    console.log(c);
}
f1();
console.log(c);
console.log(b);
console.log(a);