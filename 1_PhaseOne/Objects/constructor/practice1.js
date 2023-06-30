// new关键字执行过程
// 1. new 构造函数可以在内存中创建一个空的对象
// 2. this就会指向刚才创建的空对象
// 3. 执行构造函数里面的代码 给这个空对象添加属性和方法
// 4. 返回这个新对象，所以构造函数里面不需要return
function Star(uname, age, sex) {
    this.uname = uname;
    this.sex = sex;
    this.age = age;
    this.sing = function(song) {
        console.log(song);
    }
}

var ldh = new Star('ryan', 22, 'male')