# WebCollections

- 下方附录b站UP主 技术胖 前端学习路线，特此说明，作为个人学习所用。如有冒犯，侵权必删。

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

## 对象 Object

- 创建对象 3种方式
  1. 利用对象字面量创建对象
  2. test
  3. 利用构造函数创建对象
- 遍历对象 - `for...in` method
- JS中的对象分为3种：
  1. 自定义对象 属于ECMAScript
  2. 内置对象 属于ECMAScript
  3. 浏览器对象 属于JS独有的

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

# 第二部分 - Web APIs - DOM and BOM

- 区分API和Web API:
  - API是为程序员提供的一个接口，帮助我们实现某些功能。

  - Web API主要是针对浏览器提供的接口，主要针对于浏览器做交互效果
    - 一般都有输入和输出(函数的传参和返回值)，Web API很多都是方法(函数)

## DOM

### 什么是DOM - Document Object Model

- 推荐的处理可扩展标记语言的标准编程接口

### DOM树

- 文档: 一个页面就是一个文档，DOM中使用document表示
- 元素: 页面中的所有标签都是元素
- 节点: 网页中的所有内容都是节点(标签、属性、文本、注释等)，DOM中使用node表示
- DOM把以上内容都看作对象

### 获取元素
- 根据ID获取: `getElementById`
- 根据标签名获取: `getElementsByTagName` 返回带有指定标签名的元素的集合

### 操作元素
- 操作元素内容
  - `innerText`
  - `innerHTML`
- 操作常见元素属性: src、href、title、alt等
- 操作表单元素属性: type、value、disabled等
- 操作元素样式属性:
  - element.style--
  - className

### Node in DOM
- 节点至少拥有nodeType(节点类型), nodeName, nodeValue三个基本属性
- 节点层级：常见的是父子兄层级关系
  - 父级节点：

# Appendix

# 技术胖的前端学习路径

B站学习资源整合

## 网络知识

（Internet）

### 1. 网络工作原理

### 计算机网络原理：<https://www.bilibili.com/video/BV1xJ41137Q3>

### 2. 什么是HTTP

### HTTP协议详解：<https://www.bilibili.com/video/BV1js411g7Fw>

### 3. 浏览器及工作方式

### 浏览器是如何运作的？：<https://www.bilibili.com/video/BV1x54y1B7RE>

### 4. DNS 及其工作原理

### DNS基本工作原理：<https://www.bilibili.com/video/BV1GW411j7Ts>

### 直观DNS科普：<https://www.bilibili.com/video/BV1F54y1R7BC>

### 5. 域名相关知识

### 域名解析完整讲解：<https://www.bilibili.com/video/BV1zA411x7Pj>

### 6. 云服务相关知识

### 揭秘阿里云服务器：<https://www.bilibili.com/video/BV1Rt411u7k4>

## 超文本标记语言

（HTML）

### 1. HTML基础知识学习

### HTML全套基础教程：<https://www.bilibili.com/video/BV11t411K74Q>

### 2. HTML 编写规则 和语义化写法

### HTML 速成：<https://www.bilibili.com/video/BV1vs411M7aT>

### 3. 表单和验证

### html5表单验证：<https://www.bilibili.com/video/BV16K4y1Z7Gb>

### 4. 公约和最佳实践方法

### 前端代码规范秘籍：<https://www.bilibili.com/video/BV19P4y147Jz>

### 5. SEO 基础知识

### SEO优化学习教程：<https://www.bilibili.com/video/BV1fE411J7ya>

## 层叠样式表 CSS

### 1. CSS 基础知识学习

### CSS3基础教程：<https://www.bilibili.com/video/BV1Bx411u7cS>

### CSS3全套教程：<https://www.bilibili.com/video/BV1et411q74F>

### 2. 页面切图和布局实现

- 浮动布局

- 浮动布局：<https://www.bilibili.com/video/BV1Zs411j7Z3>
- 定位布局
- CSS定位布局：<https://www.bilibili.com/video/BV1ni4y1g7tc>
- Display
- display&visibility：<https://www.bilibili.com/video/BV1HJ411M7CM>
- 盒子模型
- CSS盒子模型与定位：<https://www.bilibili.com/video/BV1P7411G7BW>
- Grid 布局
- 如何用grid：<https://www.bilibili.com/video/BV14C4y1W7oA>
- Flex 布局
- Flex伸缩布局：<https://www.bilibili.com/video/BV1BJ41197XE>

### 3. 页面响应式布局设计

### 六个案例学会响应式布局：<https://www.bilibili.com/video/BV1ov411k7sm>

## 浏览器脚本语言

(JavaScript)

### 1. JavaScript基础语法和知识

### JavaScript基础语法：<https://www.bilibili.com/video/BV1Sy4y1C7ha>

### 2. 使用JavaScript 操作 DOM元素

### JS必会的DOM BOM操作：<https://www.bilibili.com/video/BV1k4411w7sV>

### 3. Ajax 异步请求相关知识学习

### Ajax入门到精通：<https://www.bilibili.com/video/BV1WC4y1b78y>

### 4. ES6 以上版本 的JavaScript

### ES6-ES11新特性：<https://www.bilibili.com/video/BV1uK411H7on>

## 版本控制管理系统

Version Control System

### 1.  Git的基本用法

### Git最新教程：<https://www.bilibili.com/video/BV1FE411P7B3>

### 2.  相关平台/软件的使用

- GitHub

- 十分钟学会Github：<https://www.bilibili.com/video/BV1yo4y1d7UK>
- GitLab
- gitlab使用说明：<https://www.bilibili.com/video/BV11E411x7Uv>
- Gitee
- 这个看中文网址就可以了，目前B站还没有很好的视频介绍

## 网络安全相关知识

Web Security Knowledge

### 1. HTTPS 原理和使用

### 你连HTTPS原理都不懂：<https://www.bilibili.com/video/BV1Up4y1i7PG>

### 2. CORS 跨域请求和安全知识

### 什么是CORS：<https://www.bilibili.com/video/BV1Kt411E76z>

### 3. 内容安全策略

### 网络渗透：<https://www.bilibili.com/video/BV1kh411W7Vv>

### 4. OWASP 安全风险知识

### OWASP  TOP10：<https://www.bilibili.com/video/BV1ey4y1V7Jj>

## 包管理工具

Package Managers

### 1. npm

### 包管理工具：<https://www.bilibili.com/video/BV1Dv411W7XP>

### 2. yarn

### Yarn入门：<https://www.imooc.com/learn/766>  (B站没有，推荐这个免费)

## CSS 预处理 语言

CSS Preprocessors

### 1. Sass

### SCSS从入门到实战：<https://www.bilibili.com/video/BV1Zg4y1v75U>

### 2. PostCSS

### B站没太好的视频，建议买书《深入PostCSS Web设计》

### 3. Less

### 前端less教程：<https://www.bilibili.com/video/BV1YW411T7vd>

## 构建工具

Build Tools

### 1. 任务执行命令

[Task Runners]

- npm scripts
- npm包管理应用：<https://www.bilibili.com/video/BV1Dv411W7XP>
- Gulp
- Gulp入门：<https://www.bilibili.com/video/BV1yA411s72G>

### 2. 打包工具

- Webpack

- Webpack从入门到精通：<https://www.bilibili.com/video/BV1e7411j7T5>
- Parcel
- Parcel初体验：<https://www.bilibili.com/video/BV1Pa4y147Kf>

### 3. 代码格式化工具

- Prettier

- Prettier和ESLint使用：<https://www.bilibili.com/video/BV183411r7YK>
- ESLint
- ESLint基础入门：<https://space.bilibili.com/390120104/search/video?keyword=ESLint>

## 三大前端框架

Web Framework

### React.js

### React基础视频：<https://www.bilibili.com/video/BV1g4411i7po>

### React全家桶：<https://www.bilibili.com/video/BV1wy4y1D7JT>

### React实战博客：<https://www.bilibili.com/video/BV1CJ411377B>

### React商城实战：<https://www.bilibili.com/video/BV1i5411c7xp>

### Vue.js

### Vue2全家桶：<https://www.jspang.com/detailed?id=57>

### Vue3全家桶：<https://www.jspang.com/detailed?id=67>

### vuejs从入门到精通：<https://www.bilibili.com/video/BV1Zy4y1K7SH>

### Angular

### Angular基础：<https://www.bilibili.com/video/BV1Wx411R7qt>

## Web 组件化编程

Web Components

### HTML Templates

### Custom Elements

### Shadow DOM

### 概要: 此部分内容没有找到合适视频

## CSS 相关框架

CSS Frameworks

### BootStrap

### 一周学会BootStrap：<https://www.bilibili.com/video/BV1Lx411v73k>

### Material UI

### Material  UI入门教程：<https://www.bilibili.com/video/BV12J411s75b>

### Materialize CSS

### Materialize CSS Crash Course：<https://www.bilibili.com/video/BV1gx411h7Y5>

### ReactStrap

## JavaScript 语法糖

Type Checkers

### TypeScript

### TypeScript从入门到精通：<https://www.bilibili.com/video/BV1qV41167VD>

### Flow

## 服务端渲染

Server Side  Rendering （SSR）

### React.js

- Next.js

- Next.js入门教程：<https://www.bilibili.com/video/BV13441117KK>
- GatsbyJS
- GatsbyJS 实战：<https://www.bilibili.com/video/BV1i4411T7AR> （英文）

### Vue.js

- Nuxt.js

- Nuxt.js入门：<https://www.bilibili.com/video/BV1Xt41117Kg>

### Angular

- Universal

## 图形化编程 GraphQL

### Cocos Creator

### Cocos 图形游戏开发：<https://www.bilibili.com/video/BV1sA411Y7x4>

### Three.js

### Three.js基础教程-英文：<https://www.bilibili.com/video/BV1ks411W78i>

### Three.js教程：<https://www.bilibili.com/video/BV1va4y1p7QB>

## 静态站点生成器 Static Site Generators

### Next.js

### Next.js入门教程：<https://www.bilibili.com/video/BV13441117KK>

### GatsbyJS

### GatsbyJS 实战：<https://www.bilibili.com/video/BV1i4411T7AR> （英文）

### Nuxt.js

### Nuxt.js入门：<https://www.bilibili.com/video/BV1Xt41117Kg>

### Vuepress

### Vuepress入门到精通：<https://www.bilibili.com/video/BV1vb411m7NY>

### Hugo

### 10分钟搭建个人网站：<https://www.bilibili.com/video/BV1x64y117PX>

## 移动App开发 Mobile Applications

### React  Native

### ReactNatvie基础：<https://www.bilibili.com/video/BV1Eg4y16735>

### ReactNatvie实战：<https://www.bilibili.com/video/BV15K411s75p>

### UniApp

### Uni-App从入门到实战：<https://www.bilibili.com/video/BV1BJ411W7pX>

### Uni-App美团外卖：<https://www.bilibili.com/video/BV1Zt4y117RR>

### Flutter

### Flutter基础：<https://www.bilibili.com/video/BV15t411U7yf>

### Flutter实战：<https://www.bilibili.com/video/BV1kt411B7mu>

### Ionic

### Ionic入门：<https://www.bilibili.com/video/BV1Ub41117q5>

## 桌面应用开发

Desktop Applications

### Electron

### Electron入门：<https://www.bilibili.com/video/BV1QB4y1F722>

### Electron基础：<https://www.bilibili.com/video/BV177411s7Lt>

## 学到此处，基础部分学习已经全部完成

## 学习重要程度说明

### 红色-精通：非常重要，需要达到精通、并有实战经验

### 蓝色-熟练：需要达到熟练，达到一定的基础练习量

### 灰色-了解：需要了解，把整个课程听完，作几个小练习即可

### 视频学习地址：复制后浏览器打开就可以学习
