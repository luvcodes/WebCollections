import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})

/**
 * 这里的render函数存在的原因就是因为第一行的vue有可能是残缺版的，
 * 所以用render函数来解析vue模板。
 * </p>
 * render部份这个函数的写法是因为本来是可以用:
 * render(createElement) {
 *     return createElement('h1', '你好啊');
 * }
 * 这里面的createElement实际上是一个函数，函数作为参数。
 * 1. 但是因为函数体内没有this, 所以render函数可以写成箭头函数;
 * render:(createElement) => {
 *  return createElement('h1', '你好啊');
 * }
 * 2. 并且因为只有一个参数，所以可以省略小括号，直接写成render:createElement => {
 *  return createElement('h1', '你好啊');
 * }
 * 3. 箭头函数里只有一句函数体，并且还是return
 * render:createElement => return createElement('h1', '你好啊');
 * 4. 取代createElement变成h, 把h1和你好啊更改成组件App
 * */
