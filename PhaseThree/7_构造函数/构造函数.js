function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    this.sing = function() {
        console.log('唱歌');
    }
}

const ldh = new Star('刘德华', 55);
const zxy = new Star('张学友', 58);
console.log(ldh.sing === zxy.sing);