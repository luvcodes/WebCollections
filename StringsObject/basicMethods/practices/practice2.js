// 判断字符串 中出现次数最多的字符，并统计其次数
/**
 * 统计算法: 利用charAt() 遍历这个字符串
 * 把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就 +1
 * 遍历对象，得到最大值和该字符
 */
var str = "abcoefoxyozzopp";
var o = {};
for (var i = 0;  i < str.length; i++) {
    var chars = str.charAt(i); // chars 是字符串的每一个字符
    if (o[chars]) { // o[chars] 得到的是属性值
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}