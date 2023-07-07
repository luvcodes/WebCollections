// 公共的部份放到原型上
const Person = {
    eyes: 2,
    head: 1,
};

function Woman() {}
// Woman通过原型来继承Person
Woman.prototype = Person;
// 指回原来的构造函数
Woman.prototype.constructor = Woman;
const red = new Woman();
console.log(red);
console.log(Woman.prototype);

function Man() {}
// Man通过原型来继承Person
Man.prototype = Person;
Man.prototype.constructor = Man;

