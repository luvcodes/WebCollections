function Star() {
}
// Star.prototype.sing = function() {
//     console.log('sing');
// }
// Star.prototype.dance = function() {
//     console.log('dance');
// }
console.log(Star.prototype);

Star.prototype = {
    // 从新指回创造这个原型对象的 构造函数
    sing: function() {
        console.log('sing');
    },
    dance: function() {
        console.log('dance');
    },
}
console.log(Star.prototype);
console.log(Star.prototype.constructor);
