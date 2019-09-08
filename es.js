
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
  getRouteConfigMap(obj)
)
