const o = {uname: 'pink', age: 18};
// 1. 获得所有的属性名
console.log(Object.keys(o));
// 2. 获得所有的属性值
console.log(Object.values(o));
// 3. 对象的拷贝
const oo = {};
Object.assign(oo, o);
console.log(oo);

Object.assign(o, {gender: 'female'});
console.log(o);