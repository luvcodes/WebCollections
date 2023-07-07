// 公共的部份放到原型上
// const Person1 = {
//     eyes: 2,
//     head: 1,
// };
// const Person2 = {
//     eyes: 2,
//     head: 1,
// }

function Person() {
    this.eyes = 2;
    this.head = 1;
}

function Woman() {}
// Woman通过原型来继承Person
// 父构造函数(父类) 子构造函数(子类)
// 子类的原型 = new 父类()
Woman.prototype = new Person(); // Woman和Men指向了两个不同的对象，解决了下面的问题
// 指回原来的构造函数
Woman.prototype.constructor = Woman;


/*
* 给女人添加一个方法 生孩子
*
* 这样来写的话是有问题的，会导致Man也有这个baby方法，实际上是因为对象的指向以及引用类型，Woman和Man都使用了Person
* */
Woman.prototype.baby = function() {
    console.log('Woman can give birth.');
}

const red = new Woman();
console.log(red);
// console.log(Woman.prototype);


function Man() {}
// Man通过原型来继承Person
Man.prototype = new Person();
Man.prototype.constructor = Man;
const pink = new Man();
console.log(pink);