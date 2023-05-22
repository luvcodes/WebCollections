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

### 1.5 JS的组成

- ECMAScript
- DOM - 文档对象模型
- BOM - 浏览器对象模型

## 2. 变量

### 2.2 Number 数字型

- isNaN() 这个方法用来判断非数字，并且返回一个值。如果是数字返回的是 false，如果不是数字返回的是true。