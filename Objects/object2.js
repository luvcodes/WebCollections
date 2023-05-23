var obj = new Object();
obj.uname = 'ryan';
obj.age = 18;
obj.sex = 'male';
obj.sayHi = function() {
    console.log('hi~');
}

// (1) 我们是利用等号 = 赋值的方法 添加对象的属性和方法
// (2) 每个属性和方法之间 用分号结束
console.log(obj.uname);
console.log(obj['sex']);
obj.sayHi();