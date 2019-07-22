import React, { Component } from 'react'
import { observer, Provider as StoreProvider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import stores from './store'
import AppNavigatorCmp from "./navigation/AppNavigatorCmp";
import RootView from "./containers/RootView";
import { withAppInit } from "./helper/hoc";

// how to type-safe inject store? https://github.com/mobxjs/mobx/issues/1778
// how to detect a store change? https://mobx.js.org/refguide/observe.html#observe


@withAppInit @observer
export default class App extends Component<any> {
  constructor(props: any) {
    super(props)
    // 使用observe来检测指定store是否发生了变化
    // observe(app, 'appTabs', _ => this.forceUpdate())
  }

  render() {
    const theme = stores.app.appTheme
    return (
      <StoreProvider {...stores}>
        <PaperProvider theme={theme}>
          <AppNavigatorCmp/>
          <RootView/>
        </PaperProvider>
      </StoreProvider>
    )
  }
}


// 1。用RN原生提供的SafeView，他自动将每一个页面的top和bottom都加入了SafeView，
//    不可以灵活的动态决定何时加入top何时加入bottom
// 2。用react-navigation提供的SafeView，可以动态决定加入top和bottom，但是在加入bottom后，
//    底部元素的0位置就是在bottom的SafeView开始计算
// 3。用自己的SafeView，由于实现方式是在底部加入一块有高度的view，所以在使用时元素从底部0位置开始布局时，会被截去一块，效果不好。
//    所以底部的视图需要用paddingBottom来实现


// 因为任何一个页面一定有头部，所以top这块的区域被自己的NavBar处理了
// 在Tab页面中，bottom被AppTabBar`{tabBarOptions: {safeAreaInset: { bottom: 'always' }}}`处理了，非Tab页面又不需要显示这块bottomView了
// 所以现在就不再需要SafeView了。但是当发现上述两行话有任何和实际情况相悖的地方，必须还原 SafeView
