function getSum() {
    // arguments 动态函数 只存在于函数里面
    // 1. 是伪数组
    // console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

getSum(2, 3);