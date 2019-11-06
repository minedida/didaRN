
const obj = {
  name: 'name',
  age: 'age',
}
const fun = (c) => `c${22}`

const getRouteConfigMap = (obj) => Object.keys(obj).reduce((p,c) => {
  p[c] = fun(obj[c])
  return p
}, {})

console.log(
  // getRouteConfigMap(obj)
)


const SCREENS = {
  ImageViewer: { screen: 'ImageViewer' },
  Interactable: { screen: 'Interactable' },
  Interpolate: { screen: 'Interpolate' },
}

const getRoutes = (obj) => Object.keys(obj).reduce((p,c) => {
  p.push({
    [c] : obj[c].screen
  })
  return p;
  }, [])

console.log(
  // getRoutes(SCREENS)
)

const Maybe = (value) => {
  const Nothing = {
    map: () => this,
    isNothing: () => true,
    val: () => null
  };
  const Something = val => ({
    map: fn => Maybe(fn.call(this, val)),
    isNothing: () => false,
    val: () => val
  });

  return (typeof value === 'undefined' || value === null)
    ? Nothing
    : Something(value);
};

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
function checkStringNull(str) {
  if (typeof str !== 'string') {
    return false;
  }
  if (str === 'null') {
    return false;
  }
  return str;
}

function checkArraysNull(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return false;
  }
  return arr;
}

// ------------------------------------------------------

// 解构赋值时，如果对象的值为null他不会走默认值
// 所以，对象解构时等号的右边应该是 `obj || {}`
// https://medium.com/@crunchtech/object-destructuring-best-practice-in-javascript-9c8794699a0d
// # Defaults only apply to undefined, not to null
const test = {
  name: null,
  style: {
    width: 0,
    height: 0,
  },
};
const {
  style1: { // 解构对象时，如果obj为null不会走默认值、此时解构发生错误；如果obj为undefined或者字段不存在才会走默认值。
    width = 0,
  } = {},
  name = '默认值', // 字段不存在，或者值为undefined时，才会走默认值
} = test;

// const {
//   width = 0,
// } = test.style1 || {};

// console.log(width);

// ------------------------------------------------------
let arr = [];
arr.findIndex((v,i) => {})
arr.splice(0, 0, 'd');
arr.splice(0, 0, 'f');
// console.log(arr)


// reduce-使用
// 1. 计算数组中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Bruce', 'Alice'];
const res1 = names.reduce((p, c) => {
  if (c in p) {
    p[c] ++
  } else {
    p[c] = 1
  }
  return p
}, {});
// console.log(res1)

// 2.数组去重
let arr2 = [1,2,3,4,4,1]
const res2 = arr2.reduce((p, c) => {
  if (!p.includes(c)) {
    p.push(c);
  }
  return p
  }, []);
// console.log(res2)

// 3.将二维数组转化为一维
let arr3 = [[0, 1], [2, 3], [4, 5]]
const res3 = arr3.reduce((p, c) => p.concat(c), []);
// console.log(res3)

// 4.将多维数组转化为一维
let arr4 = [[0, 1], [1, [2, 3]], [2, [3, [4, 5]]], 1]
const func4 = (arr) => arr.reduce((p, c) => {
  if (Array.isArray(c)) {
    return func4(c)
  } else {
    return p.concat(c)
  }
}, []);
// console.log(func4(arr4))

// 5.对象里的属性求和
var arr5 = [
  {
    subject: 'math',
    score: 10
  },
  {
    subject: 'chinese',
    score: 20
  },
  {
    subject: 'english',
    score: 30
  }
];
const res5 = arr5.reduce((p,c) => p += c.score, 0)
// console.log(res5)

// 6.求字符串中字母出现的次数
const str6 = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxassssssszmnha';
const res6 = str6.split('').reduce((p, c) => {
  if (c in p) {
    p[c] ++
  } else {
    p[c] = 1;
  }
  return p
}, {});
// console.log(res6)

// 7.数组转对象
var arr7 = [{name: '技术', id: 1}, {name: '设计', id: 2}];
const res7 = arr7.reduce((p, c) => {
  p[c.id] = c
  return p
  }, {});
// console.log(res7)

// console.log(new Buffer('aaasdassd', 'binary').toString('base64'))
// console.log(new Buffer('YWFhc2Rhc3Nk', 'base64').toString('binary'))

// ------------------------------------------------------
const bgc = "#"+((1<<24)*Math.random()|0).toString(16);
// console.log(bgc)

console.log(
  // new Array(10).fill(1)
  Array.from(Array(10)).fill(1)
)
