// import方式是ES6引用方法 require方式node,es6都支持
import es from './indexEs6'
import { wjl, wdq } from './indexEs61'
let node = require('./indexNode')

console.log('我是es6 export 引用方式哦', `${wjl},${wdq}`)
console.log('我是es6 export default引用方式哦', es)
console.log('我是node引用方式哦', node)