var obj = {
    uname: 'ryan',
    age: 18,
    sex: 'male',
    sayHi: function() {
        console.log('hi~');
    }
}

// (1) 里面的属性或者方法我们采取键值对的形式 键 属性名 : 值 属性值
// (2) 多个属性或者方法中间用逗号隔开的
// (3) 方法冒号后面跟的是一个匿名函数
// 2. 使用对象
// (1) 调用对象的属性 我们采取 对象名.属性名
console.log(obj.uname);
// (2) 调用属性还有一种方法 对象名['属性名']
console.log(obj['age']);
// (3) 调用对象的方法 sayHi() 对象名.方法名
obj.sayHi();