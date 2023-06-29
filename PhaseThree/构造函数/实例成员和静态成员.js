// 实例成员和静态成员
// 1. 实例成员: 实例对象上的属性和方法属于实例成员
// function Pig(name) {
//     this.name = name;
// }
// const peiqi = new Pig('佩奇');
// const qiaozhi = new Pig('乔治');
// peiqi.name = '小猪佩奇'; // 实例属性
// peiqi.sayHi = () => {
//     console.log('hi~~');
// }
// console.log(peiqi);
// console.log(qiaozhi);
// console.log(peiqi === qiaozhi);

// 2. 静态成员: 构造函数上的属性和方法称为静态成员
function Pig(name) {
    this.name = name;
}
Pig.eyes = 2; // 静态属性
Pig.sayHi = function() {
    console.log(this);
}
Pig.sayHi();
console.log(Pig.eyes);