import React from 'react'
import { View, Text } from 'react-native'
import NavigationBar from "../../components/NavigationBar";

class Setting extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar leftButton={null} title={'Setting'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text>
            Setting
          </Text>
        </View>
      </View>
    )
  }
}

export default Setting
