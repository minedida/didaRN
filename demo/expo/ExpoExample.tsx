import React from 'react'
import { View, Text } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

// import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';


class ExpoExample extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={async () => {
          let result = await WebBrowser.openBrowserAsync('https://github.com');
          console.log('openBrowserAsync-result', result)
        }}>ExpoExample </Text>
      </View>
    )
  }
}

export default ExpoExample
