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

## 2. 变量

### 2.2 Number 数字型

- isNaN() 这个方法用来判断非数字，并且返回一个值。如果是数字返回的是 false，如果不是数字返回的是true。

## 数组 Array

- 数组扩容: 两种方法

## 函数 Function

- 函数预解析
- 立即执行函数

## 对象 Object

- 创建对象 3种方式
  1. 利用对象字面量创建对象
  2. test
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

- # 节点: 网页中的所有内容都是节点(标签、属性、文本、注释等)，DOM中使用node表示

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
  - `innerText`: 不解析标签
  - `innerHTML`: 能解析标签
- 操作常见元素属性: src、href、title、alt等
  - 语法: 对象.属性 = 值
- 操作表单元素属性: type、value、disabled等
- 操作元素样式属性:
  - element.style
  - className

### 事件

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
  - 焦点事件: `focus`, `blur`
  - 键盘事件: `keydown`, `keyup`
  - 文本事件: `input`

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
-

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

### Node in DOM

- 节点至少拥有nodeType(节点类型), nodeName, nodeValue三个基本属性
- 节点层级：常见的是父子兄层级关系
  - 父级节点：

## BOM
