// 以前this的指向: 谁调用的这个函数，this就指向谁
// console.log(this); // window
// function fn() {
//     console.log(this); // window
// }
// window.fn();

// 对象方法里面的this
// const obj = {
//     name: 'andy',
//     sayHi: function() {
//         console.log(this); // obj
//     }
// }
// obj.sayHi();

// 2. 箭头函数的this 是上一层作用域的this 指向
// const fn = () => {
//     console.log(this);
// }
// fn();
// 对象方法箭头函数this

// const obj = {
//     uname: 'ryan',
//     sayHi: () => {
//         console.log(this); // this指向谁
//     }
// }
// obj.sayHi();


const obj = {
    uname: 'ryan',
    sayHi: function() {
        console.log(this); // obj
        let i = 10;
        const count = () => {
            console.log(this); // obj
        }
        count();
    }
}
obj.sayHi();


// const btn = document.querySelector('.btn');
// // 箭头函数 此时this指向了window
// btn.addEventListener('click', () => {
//     console.log(this);
// })
// // 普通函数 此时this指向了DOM对象
// btn.addEventListener('click', function() {
//     console.log(this);
// })