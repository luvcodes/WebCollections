const fn = (x) => {
  console.log(x);
};
fn(1);

// 2. 只有一个形参的时候，可以省略小括号
const fn = (x) => {
  console.log(x);
};
fn(1);

// 3. 只有一行代码的时候，我们可以省略大括号
const fn = (x) => console.log(x);
fn(1);

// 4. 只有一行代码的时候，可以省略return 直接返回值
const fn = (x) => x + x;
console.log(fn(1));

// 5. 箭头函数可以直接返回一个对象
const fn = (uname) => ({ name: uname });
fn("刘德华");
