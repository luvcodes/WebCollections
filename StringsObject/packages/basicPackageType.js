// 基本包装类型
var str = 'andy';
console.log(str.length);
// 对象 才有 属性和方法 复杂数据类型才有 属性和方法
// 简单数据类型为什么会有length属性呢？
// 基本包装类型：就是把简单数据类型 包装成 复杂数据类型
// 把简单数据类型包装为复杂数据类型
var temp = new String('andy');
// 把临时变量的值 给 str
str = temp;
// 销毁这个临时变量
temp = null;