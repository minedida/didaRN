# react hooks
> 出现于react16.8以后
## API
> ref: [react-hooks-in-typescript](https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d)

### hooks产生的影响
- [hooks存在的问题](https://overreacted.io/zh-hans/why-do-hooks-rely-on-call-order/)
- mobx 基于 hooks 产出了 [mobx-react-lite](https://github.com/mobxjs/mobx-react-lite)


### useState
- 必须保证useState执行顺序一致，不能用条件语句断开
### useContext
### useEffect/useLayoutEffect
```jsx harmony
useEffect(() =>
{
  // do smt, like loadData, init listener
  return function cleanup() {
    // unsubscribe, like remove listener to prevent memory leak
  }
}, [count])
```
- useEffect里面的函数，默认在每次组件更新时都会走一遍（走一遍subscribe和unsubscribe)，注意这点和mount/unmount有区别
- 若希望在props变化，组件有条件的进行更新，可以在第二个参数中指定字段，
- 若第二个参数传递为`[]`空数组，相当于class组件的mount/unmount执行方式
- 
### useMemo/useCallback
- useCallback减少在函数式组件中由于回调改变而导致的重复渲染(太精简了) [详细解释：useCallback](https://github.com/happylindz/blog/issues/19)
- useMemo和useCallback等价的 `useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs)`
### useRef
- 帮助在函数式组件中也可以获取组件的ref、直接操作组件
### useReducerd
### useImperativeHandle
### useDebugValue

