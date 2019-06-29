import React, { Component } from 'react'
import { observe } from "mobx";
import { observer, Provider as StoreProvider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from "./components/";
import stores from './store'
import RootView from "./components/RootView";
import AppNavigatorCmp from "./navigation/AppNavigatorCmp";
import { app } from "./store/AppStore";

// how to type-safe inject store? https://github.com/mobxjs/mobx/issues/1778
// how to detect a store change? https://mobx.js.org/refguide/observe.html#observe


@observer
export default class App extends Component<any> {
  constructor(props: any) {
    super(props)
    // 使用observe来检测指定store是否发生了变化
    observe(app, 'appTabs', _ => this.forceUpdate())
  }
  render() {
    const theme = stores.app.appTheme
    return (
      <SafeAreaView>
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

