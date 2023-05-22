function getResult() {
    return 666;
}
getResult();
console.log(getResult());

function cook(aru) {
    return aru;
}
console.log(cook('大肘子'));

// 求任意两个数的和
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 2));

// 求两个数的最大值
function getMax(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(getMax(1, 2));
console.log(getMax(11, 3));

// 利用函数求数组 [5,2,99,101,67,77] 中的最大值
function getArrMax(arr) {
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(getArrMax([5,2,99,101,67,77]));
var re = getArrMax([5,2,99,101,67,77]);
console.log(re);