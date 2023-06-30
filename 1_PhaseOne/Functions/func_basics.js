// 利用函数求任意两个数之间的累加和
function sum(a, b) {
    var sum = 0;
    for (var i = a; i <= b; i++) {
        sum += i;
    }
    console.log(sum);
}

sum(1, 10);