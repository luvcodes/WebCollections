const obj = {
    uname: 'pink',
    age: 18,
    family: {
        baby: 'baby pink'
    }
};
// const o = {...obj};
// console.log(o);
// o.age = 20;
// console.log(o);
// console.log(obj);

const o = {};
Object.assign(o, obj);
o.age = 20;
o.family.baby = 'old pink';
console.log(o);
console.log(obj);