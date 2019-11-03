import React from 'react'
import { StatusBar } from 'react-native'
import SplashScreen from "react-native-splash-screen";
import { createAppContainer } from 'react-navigation'
import DemoRouters from './DemoRouters';
import { setNavigator } from "../src/navigation";
import { createListStackNavigator, isAndroid } from "./DemoUtil";

if (__DEV__) {
  import('../src/config/ReactotronConfig');
}

// refactor ref: https://github.com/react-navigation/stack/blob/master/example/App.tsx
export const Demo = createListStackNavigator(DemoRouters, 'Examples', StatusBar.currentHeight, false)
const DemoContainer = createAppContainer(Demo)


export default () => {
  React.useEffect(() => {
    isAndroid
    && SplashScreen.hide();
  }, [])

  return (
    <>
      <StatusBar
        animated
        translucent
        barStyle='dark-content'
        backgroundColor="transparent"
      />

      <DemoContainer ref={nav => setNavigator(nav)}/>
    </>
  )
}
