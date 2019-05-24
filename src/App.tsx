import React, { Component } from 'react'
import stores from './store'
import { Provider } from "mobx-react";
// import Child from "./Child";
import { SafeAreaView } from "react-navigation";
import { StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

// how to typesafe inject store? https://github.com/mobxjs/mobx/issues/1778
export default class App extends Component {
  render() {
    return <Provider {...stores}>
      <SafeAreaView
        forceInset={{ bottom: 'never' }}
        style={{ flex: 1 }}>
        <StatusBar/>
        <AppNavigator/>
      </SafeAreaView>
    </Provider>
  }
}

