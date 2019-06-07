import React from 'react'
import { BackHandler, Platform, ToastAndroid } from "react-native";
import { getCurrentSwitchName } from "../../navigation";
import AppStack from "../../navigation/AppStack";
import AuthStack from "../../navigation/AuthStack";
import stores from '../../store'

export function addBackHandler(WrappedComponent: any, params: 'Auth' | 'App') {
  return class extends React.Component {
    static router = params === 'Auth' ? AuthStack.router : AppStack.router

    lastBackPressed: number = 0;

    constructor(props) {
      super(props)
      this.onBackAndroid = this.onBackAndroid.bind(this)
    }

    componentDidMount() {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
      }
    }

    componentWillUnmount() {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
      }
    }

    onBackAndroid() {
      const currentSwitch = getCurrentSwitchName();

      if ('Auth' === params && 'Auth' !== currentSwitch ) {
        // pop view
        return false;
      }

      if ('App' === params ) {
        if ('AppTabBar' !== currentSwitch) {
          return  false
        }
        // 处理抽屉的返回
        if (stores.drawer.showDrawer) {
          stores.drawer.toggleMenu()
          return true
        }
      }

      if (this.lastBackPressed && this.lastBackPressed + 1000 >= Date.now()) {
        BackHandler.exitApp();
        return false;
      }

      this.lastBackPressed = Date.now();
      ToastAndroid.showWithGravity('再按一次退出', ToastAndroid.SHORT, ToastAndroid.BOTTOM)

      return true;
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}