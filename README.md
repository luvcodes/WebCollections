# WebCollections

# 1. JS基础

### 1.2 JavaScript是运行在客户端的脚本语言

- 脚本语言的意思就是不需要编译，运行过程中由js解释器(js引擎)逐行来解释运行。
- 高级编程语言

### 1.4 HTML/CSS/JS的关系 - 浏览器执行JS简介

- HTML/CSS标记语言，这两个都是描述性语言
- JS脚本语言 - 编程类语言
- 浏览器分成两部分:
  - 渲染引擎: 用来解析HTML与CSS，俗称内核
  - JS引擎: 用来读取网页中的JS代码。浏览器本身并不会执行JS代码，而是由JS引擎来执行的。JS引擎执行代码时逐行解释每一句源码(转换为机器语言)，然后由计算机去执行，所以JS语言归为脚本语言，会逐行解释执行。

## 变量

### Number 数字型

- isNaN() 这个方法用来判断非数字，并且返回一个值。如果是数字返回的是 false，如果不是数字返回的是true。

## 运算符

#### 前置自增运算符

- 前置递增运算符  ++ 写在变量的前面。先加1  后返回值

#### 后置自增运算符

- 前置自增和后置自增如果单独使用 效果是一样的。后置自增口诀：**先返回原值 后自加1** 

#### 比较运算符

- `==`默认转换数据类型 会把字符串型的数据转换为数字型 只要求值相等就可以
- `===`要求 两侧的值 还有 数据类型完全一致才可以 true

## 数组 Array

- 创建数组两种方式: 
  - ​	`new Array()` 利用new创建数组
  - `[]` 利用数组字面量创建数组

- 数组扩容: 两种方法
  - 修改length长度，把length的长度直接增大，赋值超过现在的数组长度
  - 修改索引号 追加数组元素。直接赋值暂时数组还未包含的index的位置的元素

- 数组筛选
- 数组去重
- 翻转数组
- 冒泡排序

## 函数 Function

- 函数的两种声明方式
  - 利用函数关键字自定义函数(命名函数)
  - 函数表达式(匿名函数) `var fun = function() {}`
  - 
- 函数预解析
- 立即执行函数

## 对象 Object

- 创建对象 3种方式
  1. 利用对象字面量创建对象。使用`var obj = {uname: 'a', age=22, sayHi: function() {console.log('hi~')}}`
  2. 利用`new Object()`来创建对象。`obj.uname='a'; obj.age=22;obj.sayHi = function() {console.log('hi~');}`
  3. 利用构造函数创建对象
- 遍历对象 - `for...in` method
- JS中的对象分为3种：
  1. 自定义对象 属于ECMAScript
  2. 内置对象 属于ECMAScript。数组，Math对象，Date对象
  3. 宿主对象(浏览器对象) 对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，所以又称为浏览器对象。浏览器对象有很多，如Window和Document，Form，Image，Element等等。

## String对象

### 基本包装类型

### 字符串的不可变性

- 指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间

### 根据字符返回位置

### 模版字符串

## 简单数据类型与复杂数据类型

- 简单数据类型都是放在栈里面，存放的都是值
- 复杂数据类型放在堆里面。真正的对象实例是放在堆里面
- 简单类型传参 传递的是值
- 复杂类型传参 传递的是地址

# 2. Web APIs - DOM and BOM

- 区分API和Web API:
  - API是为程序员提供的一个接口，帮助我们实现某些功能。
  - Web API主要是针对浏览器提供的接口，主要针对于浏览器做交互效果
    - 一般都有输入和输出(函数的传参和返回值)，Web API很多都是方法(函数)

## DOM

- 什么是DOM - Document Object Model
- 推荐的处理可扩展标记语言的标准编程接口

### DOM树 - 总共12种节点？

- 定义: 将HTML文档以树状结构直观的表现出来，我们称之为文档树或DOM树
- 作用: 文档树只管的体现了标签与标签之间的关系
- 文档节点: 一个页面就是一个文档，DOM中使用document表示
- 元素节点: 页面中的所有标签都是元素
- 文本节点
- 节点: 网页中的所有内容都是节点(标签、属性、文本、注释等)，DOM中使用node表示
- 一份文档就是一棵节点树
- **DOM把以上内容都看作对象**

### DOM对象

- DOM对象: 浏览器根据html标签生成的js对象
  - 所有的标签属性都可以在这个对象上面找到
  - 修改这个对象的属性会自动映射到标签身上
- DOM的核心思想
  - **把网页内容当作对象来处理**
- document对象
  - 是DOM里提供的一个对象
  - 所以它提供的属性和方法都是**用来访问和操作网页内容的**
    - e.g. document.write()
  - 网页所有内容都在document里面

### 区分document和window

- 每个载入浏览器的 HTML 文档都会成为 Document 对象。Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。提示：**Document 对象是 Window 对象的一部分**，可通过 window.document 属性对其进行访问。
- Window 对象表示一个浏览器窗口或一个框架。在客户端 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。例如，可以只写[document](http://www.w3school.com.cn/jsref/dom_obj_document.asp)，而不必写 window.document。

### 获取元素

- **根据CSS选择器来获取DOM元素**
  1. 选择第一个元素
     - 语法: 选择匹配的**第一个元素**: `document.querySelector()`
     - 参数: 包含一个或多个有效的CSS选择器 **字符串**
     - 返回值: CSS选择器匹配的第一个元素，**一个HTMLElement对象**
  2. 选择匹配的多个元素
     - 语法: 选择匹配的多个元素: `document.querySelectorAll()`
     - 参数: 包含一个或多个有效的CSS选择器 **字符串**
     - 返回值: CSS选择器匹配的**NodeList对象集合**。这是一个**伪数组**，有长度有索引号的数组，但是没有pop(), push()等数组方法。想要得到里面的每一个对象，则需要遍历for循环来获得。
  3. 获取单个元素可以直接修改样式，多个不可以 因为是一个数组，只能通过遍历来进行逐次修改。

### 操作元素

- 操作元素内容
  - `innerText`: 不解析标签 (不识别HTML标签)
  - `innerHTML`: 能解析标签
- 操作常见元素属性: src、href、title、alt等
  - 语法: 对象.属性 = 值
- 操作表单元素属性: type、value、disabled等
- 操作元素样式属性:
  - element.style
  - className

## 事件

- 什么是事件监听
  - 就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为注册事件
  
- 事件监听三要素:
  - 事件源 (谁被触发了)
  - 事件类型 (用什么方式触发，点击还是鼠标经过等)
  - 事件处理程序 (要做什么事情)
  
- onclick和addEventListener的区别
  - DOM L0
    - 事件源.on事件 = function() {}

  - DOM L2
    - 事件源.addEventListener(事件, 事件处理函数)

  - 区别: on方式会被覆盖，addEventListener方式可绑定多次，拥有事件更多特性，推荐使用
  
- 事件类型
  - 鼠标事件: `click`, `mouseenter`, `mouseleave`
    - `mouseenter`和`mouseover`的区别
      - 当鼠标移动到元素上时就会触发mouseenter事件，类似mouseover，它们两者之间的差别是: mouseover鼠标经过自身盒子会触发，经过子盒子还会触发; mouseenter只会经过自身盒子触发。之所以这样，就是因为mouseenter不会冒泡。跟mouseenter搭配使用，mouseleave也不会冒泡。
  - 焦点事件: `focus`, `blur`
  - 键盘事件: `keydown`, `keyup`
  - 文本事件: `input`
- 事件绑定: JavaScript绑定事件的三种方式 (<https://juejin.cn/post/6844903720136736775>)

### 事件对象

- 获取事件对象
  - 事件对象是什么?
    - 也是个对象，这个对象里有事件触发时的相关信息
    - 例如: 鼠标点击事件中，事件对象就存了鼠标点在哪个位置等信息。
  - 使用场景
    - 可以判断用户按下哪个键，比如按下回车键可以发布新闻
    - 可以判断鼠标点击了哪个元素，从而做相应的操作

### 环境对象

- 定义: 指的是函数内部特殊的变量this，它代表着当前函数运行时所处的环境
- 作用: 弄清楚this的指向，可以让我们代码更简洁
  - 函数的调用方式不同，this指代的对象也不同
  - **谁调用，this就是谁** 是判断this指向的粗略规则
  - 直接调用函数，其实相当于是window.函数，所以this指代window

### 回调函数

- 如果将函数A作为参数传递给函数B时，我们称函数A为回调函数。简单理解: 当一个函数当作参数来传递给另外一个函数的时候，这个函数就是回调函数。

### 事件流

- 指的是事件完整执行过程中的流动路径

#### 事件冒泡

- 当某元素执行某一种类型事件，那么从该元素起逐级向外层的元素检测是否存在与本身同样的事件。这一个过程，就叫做事件冒泡。

#### 事件捕获

- 事件捕获概念: 从DOM的根元素开始去执行对应的事件(从外到里)
- 事件捕获需要写对应打的吗才能看到效果
- `DOM.addEventListener(事件类型, 事件处理函数, 是否使用捕获机制)`

#### 区分事件冒泡和事件捕获 - 见此网页: <https://juejin.cn/post/7118717854962155533>

- 事件的流向有三个阶段：捕获阶段，目标阶段，冒泡阶段。先进行事件捕获 => 再到目标本身 => 最后再进行事件冒泡。
- 说明: addEventListener第三个参数传入true代表是捕获阶段触发(很少使用)。若传入false代表冒泡阶段出发，默认就是false。

#### 阻止冒泡

- 问题: 因为默认就有冒泡模式的存在，所以容易导致事件影响到父级元素
- 需求: 若想把事件就限制在当前元素内，就需要阻止事件冒泡
- 前提: 阻止事件冒泡需要拿到事件对象
- 语法: `事件对象.stopPropagation()`

### 两种注册事件的区别

- 传统on注册(L0)
  - 同一个对象，后面注册的事件会覆盖前面注册(同一个事件)
  - 直接使用null覆盖就可以实现事件的解绑
  - 都是冒泡阶段hi性的
- 事件监听注册
  - 语法: addEventListener(事件类型, 事件处理函数, 是否使用捕获)
  - 后面注册的事件不会覆盖前面注册的事件(同一个事件)
  - 可以通过第三个参数去确定是在冒泡或者捕获阶段执行
  - 必须使用removeEventListener(事件类型，事件处理函数，获取捕获或者冒泡阶段)
  - 匿名函数无法被解绑

### 事件委托

- 事件委托是利用事件流的特征解决一些开发需求的知识技巧
  - 优点: 减少注册次数，可以提高程序性能
  - 原理: 事件委托其实是**利用事件冒泡**的特点
    - 给**父元素注册事件**，当我们出发子元素的时候，会冒泡到父元素身上，从而**触发父元素的事件**。
  - 实现: 事件对象.target.tagName可以获得真正触发事件的元素

- 阻止冒泡如何做？`事件对象.stopPropagation()`
- 阻止元素默认行为如何做？`e.preventDefault()`

### 页面加载事件

- 加载外部资源(如图片、外联CSS和JavaScript等) 加载完毕时触发的事件
- 为什么要学?
  - 有些时候需要等页面资源全部处理完了做一些事情
  - 老代码喜欢把script
- 事件名: load
- 监听页面所有资源加载完毕
  - 给window添加load事件

### Node in DOM

- 节点至少拥有nodeType(节点类型), nodeName, nodeValue三个基本属性
- DOM节点
  - DOM节点: DOM树里每一个内容都称之为节点
- 节点类型:
  - 元素节点
    - 所有的标签 比如body、div
    - html是根节点
  - 属性节点
    - 所有的属性 比如 href
  - 文本节点
    - 所有的文本
- 查找节点
  - 父节点查找
    - parentNode
  - 子节点查找
    - childNodes: 获得所有子节点、包括文本节点(空格、换行)、注释节点等。
    - **children属性**: 仅获得所有元素节点，返回的还是一个伪数组。
    - `父元素.children`
  - 兄弟关系查找
    - 下一个兄弟节点: nextElementSibling属性
    - 上一个兄弟节点: previousElementSibling属性
- 增加节点
  - 创建节点
  - 追加节点
    - 插入到父元素的最后一个子元素: `父元素.appendChild(要插入的元素)`
    - 插入到父元素中某个子元素的前面: `父元素.insertBefore(要插入的元素, 在哪个元素前面)`
- 删除节点

## BOM

### Window对象

#### BOM

- BOM(Browser Object Model) 是浏览器对象模型
- window对象是一个全局对象，也可以说是JavaScript中的顶级对象
- 像document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的。
- 所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法
- window对象下的属性和方法调用的时候可以省略window

#### 定时器 - 延时函数

- JavaScript内置的一个用来让代码延迟执行的函数，叫setTimeout
- 语法: `setTimeout(回调函数, 等待的毫秒数)`
- setTimeout仅仅只执行一次，所以可以理解为就是把这一段代码延迟执行，平时省略window
- **清楚延迟函数**: `let timer = setTimeout(回调函数, 等待的毫秒数); clearTimeout(timer);`
- 两种定时器对比:
  - 延时函数: 执行的次数
  - 间歇函数: 每隔一段时间就执行一次，除非手动清除

#### JS执行机制

![image-20230627131933560](C:\Users\ryanw\AppData\Roaming\Typora\typora-user-images\image-20230627131933560.png)

#### location对象

- location的数据类型是对象, 它拆分并保存了URL地址的各个组成部分
- **常用属性和方法**:
  - location.href属性获取完整的URL地址，对其赋值时用于地址的跳转
  - search属性获取地址中懈怠的参数，符号?后面部分。`console.log(location.search)`
  - hash属性获取中的哈希值，符号#后面部份
  - reload方法用来刷新当前页面，传入参数true时表示强制刷新

#### navigator对象

- navigator对象包含有关浏览器的信息，它有很多属性，我们最常用的是userAgent，该属性可以返回由客户机发送服务器的user-agent头部的值。

#### history对象

- 与浏览器历史记录进行交互
- `forward()`, `back()`, `go()`

### 本地存储

- 本地存储介绍
  - **数据存储在用户浏览器中**
  - 设置、读取方便、甚至页面刷新不丢失数据
  - 容量较大，sessionStorage 5M和localStorage约20M左右
- 本地存储分类 - `localStorage`
  - 语法:
    - 存储数据: `localStorage.setItem(key, value)`
    - 获取数据: `localStorage.getItem(key)`
    - 删除数据: `localStorage.removeItem(key)`
  - 可以将数据永久存储在本地(用户的电脑)，除非手动删除，否则关闭页面也会存在
- 本地存储分类 - `sessionStorage`
  - 特性:
    - 生命周期为关闭浏览器窗口
    - 在一个窗口(页面)下数据可以共享
    - 以键值对的形式存储使用
    - 用法跟localStorage基本相同

## 作用域

### 局部作用域

- 函数作用域
  - 函数内部声明的变量，在函数外部无法被访问
  - 函数的参数也是函数内部的局部变量
  - 不同函数内部生命的额变量无法相互访问
  - 函数执行完毕后，函数内部的变量实际被清空了
- 块作用域
  - 在JavaScript中使用{}包裹的代码叫做代码块

### 全局作用域

- `<script>`标签和.js文件的最外层就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。全局作用域中声明的变量，任何其他作用域都可以被访问。

### 作用域链

- 作用域链本质上是底层的变量查找机制
  - 函数在被执行时，会优先查找当前函数作用域中查找变量
  - 如果当前作用域找不到则会依次**逐级查找父级作用域**直到全局作用域
  - 嵌套关系的作用域串联起来形成了作用域链
  - 相同作用域链中按着从小到大的规则查找变量
  - 子作用域能够访问父作用域，父级作用域无法访问子级作用域

### 垃圾回收机制 - Garbage Collection

详细信息可见: <https://www.51cto.com/article/683431.html>

- JS环境中分配的内存，一般有如下生命周期
  - 内存分配: 当我们声明变量、函数、对象的时候，系统会自动为他们分配内存
  - 内存使用: 即读写内存，也就是使用变量、函数等
  - 内存回收: 使用完毕，由垃圾回收期自动不回收不再使用的内存
- 全局变量一般不会回收(关闭页面回收)
- 一般情况下局部变量的值，不用了，会被自动回收迪奥娜
- 内存泄漏: 程序中分配的内存由于某种原因程序未释放或无法释放叫做内存泄漏

- 引用计数
- 标记清除
  - 给当前不使用的值加上标记，然后再回收他的内存

### 闭包

简单介绍: <https://juejin.cn/post/7084549768067678245>

- 概念: 一个函数对周围状态的引用捆绑在一起，内存函数中访问到其外层函数的作用域
- 简单理解: 闭包 = 内层函数 + 外层函数的变量
- 闭包作用: 封闭数据，提供操作，外部可以访问函数内部的变量
- 可能引发的问题: 内存泄漏

### 变量提升

- 用var关键字声明变量会有变量提升
- 变量提升流程:
  - 先把var变量提升到当前作用域于最前面
  - 只提升变量声明，不提升变量赋值
  - 然后依次执行代码
- 我们不建议使用var声明变量

## 函数进阶

### 函数提升

- 函数提升于变量提升比较相似，是指函数在声明之前即可被调用
- 函数表达式不存在提升的现象
- 函数提升出现在相同作用域中

### 函数参数

#### 动态参数

- arguments是函数内部内置的伪数组变量，它包含了调用函数时传入的所有实参
- **arguments是一个伪数组，只存在于函数中**
- arguments的作用是动态获取函数的实参
- 可以通过for循环依次得到传递过来的实参
- 当不确定传递多少个实参的时候，使用arguments动态参数

#### 剩余参数

- 使用场景:
- ...是语法符号，置于最末函数形参之前，用于获取多余的实参
- 借助...获取的剩余实参，是个真数组
- 开发中，还是提倡多使用剩余参数

### 展开运算符

- 展开运算符`...`，将一个数组进行展开, 不会修改原数组
- 典型运用场景: 求数组最大值(最小值),

### 箭头函数

- 目的:
- 在开发中[使用箭头函数前需要考虑函数中this的值]，事件回调函数使用箭头函数，this为全局的window，因此**DOM事件回调函数为了简便，还是不太推荐使用箭头函数**
- 普通函数找父级
- 箭头函数里面有this吗？箭头函数不会创建自己的this，它只会从自己的作用域链的上一层沿用this
- DOM事件回调函数推荐使用箭头函数吗？

#### 箭头函数参数

- 普通函数有arguments动态参数
- 箭头函数没有arguments动态参数，但是有剩余参数...args

#### 箭头函数中的this，与普通函数中的this <https://juejin.cn/post/7035257186565488670>

### 数组解构[README.md](README.md)

- 数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法

### 构造函数

- 在技术上是常规函数
- 命名以大写字母开头

#### 实例成员和静态成员

<https://blog.csdn.net/feng_cy/article/details/120304230>

- 实例成员(属性和方法)即为实例成员。实例对象相互独立，**实例成员当前实例对象使用**。通过this定义的成员
- 静态成员(属性和方法)。构造函数的属性和方法称为静态成员，**静态成员只能构造函数访问**。在构造函数本身上**添加**的成员

### 内置构造函数

最主要的数据类型 6种
基本数据类型: Number, boolean, string, undefined, null
引用数据类型: Object
其中字符串、数值、布尔、等基本类型也都有专门的构造函数，这些我们称为包装类型。

- 引用类型: Object, Array, RegExp, Date等
- 包装类型: String, Number, Boolean等

#### Object静态方法

- assign: 合并一个多个对象到目标对象，并返回目标对象
- keys: 获取对象中所有key集合，数组
- values: 获取对象中所有的值集合，数组

#### Array

- 常见方法(高阶函数): forEach, filter, map, reduce, find, every
- Array.from(): 将伪数组转为数组

#### String

- 字符串常见方法:
  - split, startsWith, includes, substring
  - toUpperCase, toLowerCase, indexOf
- length长度属性, String()直接使用转字符串
- num.toString(): 转换为字符串

#### Number

- Number() 直接使用传数字
- toFixed() 设置保留小数位的长度

### 原型

#### 原型 - Prototype

- 构造函数和原型里面的this指向实例化的对象
- 每个构造函数都有一个prototype属性，指向另一个对象，所以我们也称为原型对象。
- 我们可以把不变的方法，直接定义在prototype对象上
- 公共的属性写到构造函数里面，公共的方法写到原型对象身上。

#### 数组扩展

#### constructor属性

- 如果有多个对象的方法，我们可以给原型对象采取对象形式赋值
- 但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个constructor指向原来的构造函数。

#### 对象原型

- 对象都会有一个属性******proto****** 指向构造函数的prototype原型对象

#### 原型继承

#### 原型链以及instanceOf

- 只要是对象都有原型: 对象.**proto**, 指向原型对象(对象.prototype)。
- 只要是原型对象，里面就有constructor，指向创造它的构造函数。
- 原型链就是一种查找规则
  - 当访问一个对象的属性时，首先查找这个对象自身有没有属性
  - 如果没有就查找它的原型(也就是__proto__指向的prototype原型对象)
  - 如果还没有就查找原型对象的原型(Object的原型对象)
  - 依此类推一直找到Object为止(null)
  - __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。
  - 可以使用instanceof运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上。

### 深浅拷贝 - https://juejin.cn/post/7072528644739956773
- 只针对引用类型
#### 浅拷贝
- 实现浅拷贝的原因: 引用类型互相赋值，直接赋值，两个对象指向同一地址，就会造成引用类型之间互相影响的问题，所以通过实现浅拷贝，在单层对象就可以让两个对象指向两个地址了。
- 拷贝的是地址
- 拷贝对象: Object.assign() 或者 展开运算符{...obj} 拷贝对象
- 拷贝数组: Array.prototype.concat() 或者 [...arr]
- 直接赋值和浅拷贝有什么区别？
  - 直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的地址。
  - 浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会相互影响。
- 浅拷贝怎么理解？
  - 拷贝对象之后，里面的属性值是简单数据类型直接拷贝值。
  - 如果属性值是引用数据类型则拷贝的是地址。
#### 递归函数

#### 深拷贝

- 深拷贝实现
- 利用lodash和JSON实现深拷贝

### 异常处理

#### throw抛异常

#### try/catch捕获异常

#### debugger

### 处理this

- 普通函数和箭头函数的this
- call方法改变this指向
- apply方法
- bind方法

### 性能优化

#### 防抖以及底层实现

#### 节流以及底层实现

# React

## React入门

### React的基本使用

#### 虚拟DOM的两种创建方式

##### 使用JSX创建虚拟DOM

##### 使用JS创建虚拟DOM

### React JSX

 * jsx语法规则:
   * 定义虚拟DOM时，不要写引号
   * 标签中混入JS表达式时要用{}
   * 样式的类名指定不要用class，要用className。
   * 内联样式，要用style={{key:value}}的形式去写。
   * 只有一个根标签
   * 标签必须闭合
   * 标签首字母: 
     * 若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
     * 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

### 模块与组建、模块化与组件化的理解

- 组件的定义: 
- 模块化的定义: 
- 组件化的定义: 

## React面向组件编程

### 函数式组件

### 类式组件

### 组件实例的三大核心属性

1. state: state是在组件的实例对象上。而组件编程有两种: 函数式组件和类式组件，只有类式组件才有实例对象，所以state只能在类式组件中使用。
   1. state里面保存的数据，不能直接更改。要使用setState()方法
2. props: 

## React应用 (基于React脚手架)

## React ajax

## React-Router

## React UI组件库

## redux





## 



