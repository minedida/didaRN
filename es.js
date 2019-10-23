//
// const obj = {
//   name: 'name',
//   age: 'age',
// }
// const fun = (c) => `c${22}`
//
// const getRouteConfigMap = (obj) => Object.keys(obj).reduce((p,c) => {
//   p[c] = fun(obj[c])
//   return p
// }, {})
//
// console.log(
//   getRouteConfigMap(obj)
// )

// const Maybe = (value) => {
//   const Nothing = {
//     map: () => this,
//     isNothing: () => true,
//     val: () => null
//   };
//   const Something = val => ({
//     map: fn => Maybe(fn.call(this, val)),
//     isNothing: () => false,
//     val: () => val
//   });
//
//   return (typeof value === 'undefined' || value === null)
//     ? Nothing
//     : Something(value);
// };

// ------------------------------------------------------

// check string null
// const a = 'null';
// if (a) {
//   console.log('a')
// }else {
//   console.log('b')
// }
//
// const obj = a || '假数据';
// console.log(obj);
//
// console.log('typeof null', typeof null);
// console.log('typeof a', typeof a);
// console.log('typeof a === \'string\'', typeof a === 'string');
// console.log('a === null', a === null);
// console.log("a === 'null'", a === 'null');
/**
 *  增强对string类型的空值的判断
 * @returns {boolean|*}
 * @param str
 */
// function checkStringNull(str) {
//   if (typeof str !== 'string') {
//     return false;
//   }
//   if (str === 'null') {
//     return false;
//   }
//   return str;
// }
//
// function checkArraysNull(arr) {
//   if (!Array.isArray(arr)) {
//     return false;
//   }
//   if (arr.length === 0) {
//     return false;
//   }
//   return arr;
// }

// ------------------------------------------------------

// 解构赋值时，如果对象的值为null他不会走默认值
// 所以，对象解构时等号的右边应该是 `obj || {}`
// https://medium.com/@crunchtech/object-destructuring-best-practice-in-javascript-9c8794699a0d
// # Defaults only apply to undefined, not to null
// const test = {
//   name: null,
//   style: {
//     width: 0,
//     height: 0,
//   },
// };
// const {
//   style1: { // 解构对象时，如果obj为null不会走默认值、此时解构发生错误；如果obj为undefined或者字段不存在才会走默认值。
//     width = 0,
//   } = {},
//   name = '默认值', // 字段不存在，或者值为undefined时，才会走默认值
// } = test;

// const {
//   width = 0,
// } = test.style1 || {};

// console.log(width);

// ------------------------------------------------------
let arr = [];
arr.findIndex((v,i) => {})
arr.splice(0, 0, 'd');
arr.splice(0, 0, 'f');
console.log(arr)
