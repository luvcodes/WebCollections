// 如果一个函数在内部可以调用其本身，那么这个函数就是递归函数
let i = 1;
function fn() {
    console.log(`This is ${i} times`);
    if (i >= 6) {
        return;
    }
    i++;
    fn();
}
fn();