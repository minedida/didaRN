import React from 'react'
import { View, Platform } from 'react-native'
import { Button } from 'react-native-paper'
import * as WebBrowser from 'expo-web-browser';
import {
  // Asset,
  // Constants,
  // FileSystem,
  Permissions,
} from 'react-native-unimodules';


class ExpoExample extends React.Component {
  constructor(props) {
    super(props)
    this.openBrowser = this.openBrowser.bind(this)
    this.requestPermission = this.requestPermission.bind(this)
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      WebBrowser.getCustomTabsSupportingBrowsersAsync()
      .then(
        ({ browserPackages }) =>
        browserPackages.map(name => ({ label: name, value: name })))
      .then(
        packages =>
          this.setState({ packages }));
    }
  }

  async openBrowser() {
    const options = {
      toolbarColor: 'pink',
      controlsColor: 'cyan',
      browserPackage: 'com.android.chrome',
      enableBarCollapsing: true,
      showTitle: true,
      showInRecents: true
    };
    let result = await WebBrowser.openBrowserAsync('https://github.com', options);
    console.log('openBrowserAsync-result', result)
  }

  async requestPermission() {
   const resp = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // alert(JSON.stringify(resp))
  }

  render() {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >

        <Button
          delayPressIn={0}
          onPress={this.openBrowser}
        >
          WebBrowser
        </Button>
        <Button
          delayPressIn={0}
          onPress={this.requestPermission}
        >
          Permissions
        </Button>
      </View>
    )
  }
}

export default ExpoExample
