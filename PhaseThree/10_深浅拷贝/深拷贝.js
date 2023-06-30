const obj = {
    uname: 'pink',
    age: 18,
    hobby: ['pingpong', 'football']
}
const o = {}
// 拷贝函数
function deepCopy(newObj, oldObj) {
    for (let k in oldObj) {
        // 处理数组的问题
        if (oldObj[k] instanceof Array) {
            newObj[k] = [];
            // newObj[k] 接受 []
            // oldObj[k] ['pingpong', 'football']
            deepCopy(newObj[k], oldObj[k]);
        } else if (oldObj[k] instanceof Object) {
            newObj[k] = {};
            deepCopy(newObj[k], oldObj[k]);
        } else {
            // k 属性名 uname age   oldObj[k] 属性值 18
            // newObj[k] === o.uname;
            newObj[k] = oldObj[k];
        }
    }
}
deepCopy(o, obj); // 函数调用 两个参数 o 新对象 obj 旧对象
console.log(o);
o.age = 20;
o.hobby[0] = 'basketball';
console.log(obj);
