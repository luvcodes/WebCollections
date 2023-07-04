function countDown(time) {
    var nowTime = +new Date(); // 如果括号为空 返回的是当前时间总的毫秒数
    var inputTime = +new Date(time); // 返回的是用户输入的时间 总的毫秒数
    var times = (inputTime - nowTime) / 1000; // time是剩余时间总的秒数

    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;
    var h = parseInt(times / 60 / 60 % 24); // 时
    h = h < 10 ? '0' + h : h;
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    return d + 'day' + h + 'hour' + m + 'minute' + s + 'second';
}
console.log(countDown('2019-5-1 18:00'));

var date = new Date();
console.log(date);