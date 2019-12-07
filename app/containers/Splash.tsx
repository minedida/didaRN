import React from 'react'
// import { Platform } from "react-native";
// import SplashScreen from 'react-native-splash-screen'
import { NavigationPops } from "../navigation/utils";
import initPersist from "../store/persist-store";
import RNBootSplash from "react-native-bootsplash";
import { Platform } from "react-native";

type Props = {
  navigation: NavigationPops
}

function Splash(props: Props) {
  function goNext(routeName: string) {
    props.navigation.navigate(routeName)
  }

  React.useEffect(() => {
    let timer;
    initPersist().then(() => {
      goNext('App');
      timer = setTimeout(() => {
        Platform.OS === 'android'
        && RNBootSplash.hide();
      }, 300)
    });
    return () => {
      timer && clearTimeout(timer)
    }
  });
  return <></>
}

export default Splash
