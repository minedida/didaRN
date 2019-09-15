import React from 'react'
import { View, Text, Platform } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

// import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';


class ExpoExample extends React.Component {

  componentDidMount() {
    if (Platform.OS === 'android') {
      WebBrowser.getCustomTabsSupportingBrowsersAsync()
      .then(({ browserPackages }) => browserPackages.map(name => ({ label: name, value: name })))
      .then(packages => this.setState({ packages }));
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={async () => {
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
        }}>ExpoExample </Text>
      </View>
    )
  }
}

export default ExpoExample
