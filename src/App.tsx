import React, { Component } from 'react'
import stores from './store'
import { observer, Provider as StoreProvider } from "mobx-react";
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from "./components/";
import AppNavigatorCmp from "./navigation/AppNavigatorCmp";


// how to type-safe inject store? https://github.com/mobxjs/mobx/issues/1778

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6071e2',
    accent: 'yellow',
    placeholder: '#c3c3c3'
  }
}
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

