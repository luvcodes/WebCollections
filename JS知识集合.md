# 前端知识集合

## 2023.8.2 学习概念

### 闭包

- `function f1(){
      var n=999;
      function f2(){
          alert(n); // 999
      }
  }`
- F2()就是闭包。闭包就是能够读取其他函数内部变量的函数。由于在 JavasSript 中，只有函数内部的子函数才能读取局部变量，所以说，闭包可以简单理解成"定义在一个函数内部的函数"。https://www.runoob.com/w3cnote/closure-intro.html
- 闭包可以用在许多地方。它的最大用处有两个，
  - 一个是前面提到的可以读取函数内部的变量，
  - 另一个就是让这些变量的值始终保持在内存中，不会在 f1 调用后被自动清除。由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题

### 函数

- JS中函数是一等公民
  - 函数可以作为另外一个函数的参数
  - 函数可以作为另外一个函数的返回值来使用
  
- 在函数内部声明变量的时候，一定要使用 var 命令。如果不用的话，你实际上声明的是一个全局变量！

- JavasSript 语言的特别之处就在于：函数内部可以直接读取全局变量，但是在函数外部无法读取函数内部的局部变量。

  #### **`this`关键字**: 

  - https://www.runoob.com/js/js-this.html
  - 如果该函数是一个构造函数，this 指针指向一个新的对象
  - 在方法中，this 表示该方法所属的对象。
  - 如果单独使用，this 表示全局对象。
  - 在函数中，this 表示全局对象。
  - 在函数中，在严格模式下，this 是未定义的(undefined)。
  - 在事件中，this 表示接收事件的元素。
  - 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

  #### **箭头函数**: 

  - **箭头函数表达式**的语法比[函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)更简洁，并且没有自己的[`this`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)，[`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)，[`super`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)或[`new.target`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

  - 作用: 

    - 引入箭头函数有两个方面的作用：
      - 更简短的函数
      - 不绑定`this`

  - ```javascript
    (param1, param2, …, paramN) => { statements }
    (param1, param2, …, paramN) => expression
    //相当于：(param1, param2, …, paramN) =>{ return expression; }
    
    // 当只有一个参数时，圆括号是可选的：
    (singleParam) => { statements }
    singleParam => { statements }
    
    // 没有参数的函数应该写成一对圆括号。
    () => { statements }
    ```

  - **箭头函数中的`this`**: 

    - 箭头函数不会创建自己的`this`，它只会从自己的作用域链的上一层继承 `this`。因此，在下面的代码中，传递给`setInterval`的函数内的`this`与封闭函数中的`this`值相同

      ```javascript
      function Person() {
        this.age = 0;
      
        setInterval(() => {
          this.age++; // |this| 正确地指向 p 实例
        }, 1000);
      }
      
      var p = new Person();
      ```

    - 箭头函数不绑定[Arguments 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)。因此，在本示例中，`arguments`只是引用了封闭作用域内的 arguments：

      ```javascript
      var arguments = [1, 2, 3];
      var arr = () => arguments[0];
      
      arr(); // 1
      
      function foo(n) {
        var f = () => arguments[0] + n; // 隐式绑定 foo 函数的 arguments 对象。arguments[0] 是 n，即传给 foo 函数的第一个参数
        return f();
      }
      
      foo(1); // 2
      foo(2); // 4
      foo(3); // 6
      foo(3, 2); //6
      ```



### JS变量后面加感叹号

- 如果变量是字符串、数字或其他类型，加感叹号会将它们转换为布尔值，然后再取反。

- let a = "hello"; console.log(!a); // 输出 false

  let b = 1; console.log(!b); // 输出 false

  let c = 0; console.log(!c); // 输出 true

### Vue

#### 数据代理

- 概念: 简单的说，就是通过一个对象代理对另一个对象中属性的操作（读/写）。在Vue中，通过vm对象来代理data对象中属性的操作（读/写），这样更方便操作data中的数据。
- Vue通过`Object.defineProperty()`把data对象中所有属性添加到vm上。为每一个添加到vm上的属性，都指定一个getter/setter。在getter/setter内部去操作（读/写）data中对应的属性



### 未解决的问题

1. js中的bind函数用法
2. js中的this用法，this指向问题
3. js中的箭头函数
4. 

