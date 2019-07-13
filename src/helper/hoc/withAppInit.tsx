import React from 'react'
import { Alert, NativeModules, NetInfo } from "react-native";
import * as RNLocalize from "react-native-localize";
import stores from '../../store'
import { setI18nConfig } from "../../i18n";
import { app } from "../../store/AppStore";

function showDialog() {
  Alert.alert(`未绑定 希悦校园 账号`, `绑定希悦校园账号，获得更多体验 \n取消后可在“我的”点击个人信息卡片进行绑定账号管理`,
    [
      { text: '取消', onPress: () => {} },
      { text: '升级', onPress: () =>
        {
          let url = 'http://192.168.1.104:8080/app-debug.apk'
          NativeModules.UpgradeModule.update(url);
        }
      }])
}

export default function withAppInit(WrappedComponent: any) {
  return class extends React.Component {

    async componentDidMount() {
      this.handleConnectionChange()
      setI18nConfig()
      //showDialog()

      NetInfo.addEventListener("connectionChange", this.handleConnectionChange)
      RNLocalize.addEventListener("change", this.handleLocalizationChange);

    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener(
        "connectionChange",
        this.handleConnectionChange
      )
      RNLocalize.removeEventListener("change", this.handleLocalizationChange)
    }

    // 处理网络连接发生改变
    handleConnectionChange = async (_connectionInfo?: any) => {
      const result = await NetInfo.isConnected.fetch()
      stores.app.setNetworkConnected(result)
    }

    // 处理语言发生改变
    handleLocalizationChange = () => {
      const languageTag = setI18nConfig();
      app.setLanguageTag(languageTag)
      this.forceUpdate();
    }

    render() {
      return <WrappedComponent/>
    }
  }
}
