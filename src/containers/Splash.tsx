import React from 'react'
import { Platform } from "react-native";
import SplashScreen from 'react-native-splash-screen'
import { NavigationPops } from "../navigation/utils";
import initPersist from "../store/persist-store";

type Props = {
  navigation: NavigationPops
}

function Splash(props: Props) {
  function goNext(routeName: string) {
    props.navigation.navigate(routeName)
  }

  React.useEffect(() => {
    let timmer;
    initPersist().then(() => {
      goNext('App');
      timmer = setTimeout(() => {
        Platform.OS === 'android' && SplashScreen.hide();
      }, 300)
    });
    return () => {
      timmer && clearTimeout(timmer)
    }
  });
  return <></>
}

export default Splash
