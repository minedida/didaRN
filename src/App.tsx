import React, { Component } from 'react'
import stores from './store'
import { Provider } from "mobx-react";
import AppNavigator from "./navigation/AppNavigator";
import SafeAreaView from "./components/SafeAreaView";

// how to typesafe inject store? https://github.com/mobxjs/mobx/issues/1778
export default class App extends Component {
  render() {
    return <Provider {...stores}>
      <SafeAreaView >
        {/*<StatusBar barStyle={'default'} backgroundColor="transparent" translucent/>*/}
        <AppNavigator/>
      </SafeAreaView>
    </Provider>
  }
}

