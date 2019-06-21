import React, { Component } from 'react'
import { observer, Provider as StoreProvider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigatorCmp from "./navigation/AppNavigatorCmp";
import { SafeAreaView } from "./components/";
import { theme} from './theme'
import stores from './store'

// how to type-safe inject store? https://github.com/mobxjs/mobx/issues/1778


@observer
export default class App extends Component<any> {
  render() {
    return (
      <SafeAreaView>
        <StoreProvider {...stores}>
          <PaperProvider theme={theme}>
            <AppNavigatorCmp/>
          </PaperProvider>
        </StoreProvider>
      </SafeAreaView>
    )
  }
}

