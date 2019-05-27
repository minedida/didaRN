import React, { Component } from 'react'
import stores from './store'
import { observer, Provider } from "mobx-react";
import AppNavigator from "./navigation/AppNavigator";
import {SafeAreaView} from "./components/";
import { addDrawer } from "./helper/hoc/addDrawer";
import { onNavigationStateChange } from "./navigation/utils";


// how to type-safe inject store? https://github.com/mobxjs/mobx/issues/1778
@observer @addDrawer
export default class App extends Component<any> {
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView>
          <AppNavigator
            onNavigationStateChange={onNavigationStateChange}/>
        </SafeAreaView>
      </Provider>
    )
  }
}

