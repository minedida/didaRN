/*
// const keys = ["TodoTab", "CalendarTab", "SettingTab"];
const obj = {
  "0": "TodoTab",
  "1": "CalendarTab",
  "2": "SettingTab",
}
console.log(typeof obj)
[
  {"key":"TodoTab","routeName":"TodoTab"},
  {"key":"CalendarTab","routeName":"CalendarTab"},
  {"key":"SettingTab","routeName":"SettingTab"}
]
const routes = [];
console.log(Object.keys(obj))
*/


const arr =  [
  { index: 0, cmp: 'TodoTab', show: true },
  { index: 1, cmp: 'CalendarTab', show: true },
  { index: 2, cmp: 'TomatoTab', show: false },
  { index: 3, cmp: 'ClockinTab', show: false },
  { index: 4, cmp: 'SearchTab', show: false },
  { index: 5, cmp: 'SettingTab', show: true }
]
const list = []
// arr.filter(v => v.show).forEach(v => list.push(v.cmp))
// console.log(list)

console.log(
  arr.filter(v => v.show).reduce((p, c) => {
    // p.push(c.cmp)
    p.push({
      key: c.cmp,
      routeName: c.cmp,
    })
    return p;
  }, [])
)
