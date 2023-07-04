var obj = {
    name: 'ryan',
    age: 18,
    sex: 'male',
    fn: function () {

    }
}

for (var k in obj) {
    console.log(k); // k 变量 输出属性名
    console.log(obj[k]); // obj[k] 得到属性值
}
// 我们使用 for in 里面的变量 建议使用k或者key