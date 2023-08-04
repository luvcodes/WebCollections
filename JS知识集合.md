# 前端知识集合

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

### JS变量后面加感叹号

- 如果变量是字符串、数字或其他类型，加感叹号会将它们转换为布尔值，然后再取反。

- let a = "hello"; console.log(!a); // 输出 false

  let b = 1; console.log(!b); // 输出 false

  let c = 0; console.log(!c); // 输出 true

### Vue

#### 数据代理

- 概念: 简单的说，就是通过一个对象代理对另一个对象中属性的操作（读/写）。在Vue中，通过vm对象来代理data对象中属性的操作（读/写），这样更方便操作data中的数据。
- Vue通过`Object.defineProperty()`把data对象中所有属性添加到vm上。为每一个添加到vm上的属性，都指定一个getter/setter。在getter/setter内部去操作（读/写）data中对应的属性

### 函数、箭头函数以及this的用法

#### 常规函数

- JS中函数是一等公民
  - 函数可以作为另外一个函数的参数
  - 函数可以作为另外一个函数的返回值来使用
- 在函数内部声明变量的时候，一定要使用 var 命令。如果不用的话，你实际上声明的是一个全局变量！

#### 函数中的形参`arguments`定义及其用法

- `arguments`是一个类数组对象，在函数调用时创建，里面存了所有传过来的实参

- arguments 的使用: 只有函数才有 arguments对象，而且是每个函数都内置好了这个arguments

- 伪数组 并不是真正意义上的数组, 在chrome的控制台运行多个形参、实参的函数，可以看到arguments的`__proto__`是Object，证明了arguments是个对象类型，而不是数组。属性名是按照传入参数的序列来的，第1个参数的属性名是"0"，第2个参数的属性名是"1"，以此类推，属性名类似数组中的索引值。 

  - 具有数组的length属性
  - 按照索引的方式进行存储的
  - 它没有真正数组的一些方法 pop() push() 等方式

- 实例代码

  - 例1: 可以看1_PhaseOne的5_Functions部分`arguments.js`文件的内容。

  - 例2: 

    ```javascript
    function colors1(co1, co2){
        console.log(co1 + ',' + co2)
    }
    colors1('red','blue');//red,blue
    
    function colors2(){
        console.log(arguments[0] + ',' + arguments[1])
    }
    colors2('yellow','green'); //yellow,green

  - 例3: arguments对象也可以与命名参数一起使用 

    ```javascript
    function calcu(num1,num2){
        console.log(num1 + '-' + arguments[0]);
        console.log(num2 + '-' + arguments[1]);
    }
    calcu(3,5);// 3-3; 5-5
    ```

#### `arguments`的`caller`, `callee`含义以及使用方法

- 资料见: https://juejin.cn/post/7056285377899790372

#### 常规函数的this

##### 普通模式

- 两个说明文档: 
  - https://www.runoob.com/js/js-this.html
  - https://juejin.cn/post/6981251280236707853
- 非严格模式下，this 默认指向全局对象 window；
- **对象方法调用**模式下，this 总是指向调用它所在方法的对象，this 的指向与所在方法的调用位置有关，而与方法的声明位置无关（箭头函数特殊）
- **函数调用**下，调用方法没有明确对象的时候，this 指向 window，如 setTimeout、匿名函数等
- **构造函数调用**模式下，this 指向被构造的对象；
- 如果单独使用，this 表示全局对象。
  - 在事件中，this 表示接收事件的元素。
  - 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

##### 严格模式

- 考虑到 this 是词法层面上的，严格模式中与 this 相关的规则都将被忽略（忽略是否在严格模式下的影响）
- 在函数中，在严格模式下，this 是未定义的(undefined)。

#### 箭头函数以及箭头函数中的this

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions

- https://juejin.cn/post/7041055543984652319

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

  - 箭头函数不绑定[Arguments 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)。因此，在本示例中，`arguments`只是引用了封闭作用域内的 arguments

- 箭头函数不会创建自己的`this`，它只会从自己的作用域链的上一层继承 `this`。因此，在下面的代码中，传递给`setInterval`的函数内的`this`与封闭函数中的`this`值相同。

  ```javascript
  function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| 正确地指向 p 实例
    }, 1000);
  }
  
  var p = new Person();
  ```

- 在声明的时候绑定this，而非取决于调用位置

- **技巧：它的外层没有函数，this 是 window；外层有函数，看外层函数的 this 是谁，它的 this 就是谁。**外层函数是常规函数就看外层函数是被谁调用的

- call() 、apply() 、 bind() 方法对于箭头函数来说只是传入参数，对它的 this 毫无影响；

- 箭头函数不绑定this，会捕获其所在上下文的this，作为自己的this。意思就是箭头函数的外层如果有普通函数，那么箭头函数的this就是这个外层的普通函数的this，箭头函数的外层如果没有普通函数，那么箭头函数的this就是全局变量。

  - 箭头函数外有函数: 

  - ```javascript
    let obj = {
      fn:function(){
          console.log('我是普通函数',this === obj)   // true
          return ()=>{
              console.log('我是箭头函数',this === obj) // true
          }
      }
    }
    console.log(obj.fn()())
    ```

  - 箭头函数的外层没有普通函数: 

  - ```javascript
    let obj = {
        fn:()=>{
            console.log(this === window);
        }
    }
    console.log(obj.fn())
    // true
    
    ```

- 箭头函数是匿名函数，不能作为构造函数，不可以使用new命令，否则会抛出错误



### 函数中的`call()`, `bind()`, `apply()`方法

- 说明:  https://www.runoob.com/w3cnote/js-call-apply-bind.html

- 这三个方法都是用来重定义this这个对象的

  ![img](https://www.runoob.com/wp-content/uploads/2018/08/1535346409-8172-20170316172537651-1643313633.png)

  ```javascript
  obj.myFun.call(db)；　　　　// 德玛年龄 99
  obj.myFun.apply(db);　　　 // 德玛年龄 99
  obj.myFun.bind(db)();　　　// 德玛年龄 99

- bind 返回的是一个新的函数，你必须调用它才会被执行



![img](https://www.runoob.com/wp-content/uploads/2018/08/1535346409-7922-20170316173631526-1279562612.png)

```javascript
obj.myFun.call(db,'成都','上海')；　　　　 // 德玛 年龄 99  来自 成都去往上海
obj.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
obj.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db,['成都','上海'])();　　 // 德玛 年龄 99  来自 成都, 上海去往 undefined
```

- call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：

  call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 **obj.myFun.call(db,'成都', ... ,'string' )**。

  apply 的所有参数都必须放在一个数组里面传进去 **obj.myFun.apply(db,['成都', ..., 'string' ])**。

  bind 除了返回是函数以外，它 的参数和 call 一样。



同时，我发现看这两段代码，对this的指向问题有了更深的理解: 

- 在进行函数调用的时候，函数体内包括了`this`， 那么这时候如果函数的形参列表为空，那么这个函数体内的this指向的就是window对象;
- 如果函数的形参列表不是空，那么这个函数体内的 



### 数组中的`splice`方法

- 语法: `array*.splice(*index*,*howmany*,*item1*,.....,*itemX*)`

- 返回值: Array，如果从数组中删除了元素，那么会改变原数组，返回的事含有被删除的元素的数组

- 示例代码: 

  ```javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2,1,"Lemon","Kiwi");
  ```

  ```javascript
  Banana,Orange,Lemon,Kiwi,Mango
  ```

  ```javascript
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2,2);
  ```

  ```javascript
  Banana,Orange
  ```

  ```javascript
  // 移除数组中的指定元素
  const array = [2, 5, 9];
  
  document.write(array);
  
  const index = array.indexOf(5); // 移除元素5
  if (index > -1) { // 移除找到的指定元素
    array.splice(index, 1); // 移除元素
  }
  document.write("<br>")
  // array = [2, 9]
  document.write(array);
  ```

  ```javascript
  2,5,9
  2,9
  ```

  
