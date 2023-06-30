var arr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.indexOf('blue'));  // 只返回第一个满足条件的索引号
console.log(arr.indexOf('yellow')); // 如果在数组中找不到元素 返回-1
console.log(arr.lastIndexOf('blue')); // 从后往前找，索引号是不会反的