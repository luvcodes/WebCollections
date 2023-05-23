// 构造函数的语法格式
// function 构造函数名() {
//     this.属性 = 值;
//     this.方法 = function() {
//     }
// }
// new 构造函数名();

// (1) 构造函数的名字 首字母要大写
function Star(uname, age, sex) {
    this.uname = uname;
    this.age = age; 
    this.sex = sex;
    this.sing = function (song) {
        console.log(song);
    }
}
var ldh = new Star('刘德华', 18, 'male');
console.log(typeof(ldh));
console.log(ldh.uname);
ldh.sing('冰雨');

/**
 * 1. 构造函数名字首字母要大写
 * 2. 我们构造函数不需要return 就可以返回结果
 * 3. 我们调用构造函数 必须使用ew
 * 4. 我们只要new Star() 
 */