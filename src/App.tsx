import React, { Component } from 'react'
import {SafeAreaView} from 'react-navigation'
import { observer, Provider as StoreProvider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import stores from './store'
import AppNavigatorCmp from "./navigation/AppNavigatorCmp";
import RootView from "./containers/RootView";
import { withAppInit } from "./helper/hoc";

// how to type-safe inject store? https://github.com/mobxjs/mobx/issues/1778
// how to detect a store change? https://mobx.js.org/refguide/observe.html#observe


@observer @withAppInit
export default class App extends Component<any> {
  constructor(props: any) {
    super(props)
    // 使用observe来检测指定store是否发生了变化
    // observe(app, 'appTabs', _ => this.forceUpdate())
  }
  render() {
    const theme = stores.app.appTheme
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
        <StoreProvider {...stores}>
          <PaperProvider theme={theme}>
            <AppNavigatorCmp/>
            <RootView/>
          </PaperProvider>
        </StoreProvider>
      </SafeAreaView>
    )
  }
}


// 1。用RN原生提供的SafeView，他自动将每一个页面的top和bottom都加入了SafeView，
//    不可以灵活的动态决定何时加入top何时加入bottom
// 2。用react-navigation提供的SafeView，可以动态决定加入top和bottom，但是在加入bottom后，
//    底部元素的0位置就是在bottom的SafeView开始计算
// 3。用自己的SafeView，由于实现方式是在底部加入一块有高度的view，所以在使用时元素从底部0位置开始布局时，会被截去一块，效果不好。
//    所以底部的视图需要用paddingBottom来实现
