let that
function Star(uname) {
    that = this;
    // console.log(this);
    this.uname = uname;
}
// 圆形对象里面的函数this指向的还是 实例对象ldh
Star.prototype.sing = function () {
    that = this
    console.log('唱歌');
}

// 实力对象 ldh
// 构造函数里面的this就是 实力对象ldh
const ldh = new Star('刘德华');
ldh.sing();
console.log(that === ldh);