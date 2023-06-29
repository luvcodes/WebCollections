function Pig(uname, age) {
    this.name = uname;
    this.age = age;
}

// console.log(new Pig('Pig', 6));
// console.log(new Pig('pig', 3));
// const p = new Pig('Pig', 6);
// console.log(p);

function Goods(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}
const mi = new Goods('小米', 1999, 20);
console.log(mi);
const hw = new Goods('华为', 3999, 59);
console.log(hw);

const date = new Date('2022-4-8');
console.log(date);