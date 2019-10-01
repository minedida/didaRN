import React, {Component} from 'react'
import {View, Text} from 'react-native'

class SpecificPlatform extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ios</Text>
      </View>
    )
  }
}

export default SpecificPlatform
