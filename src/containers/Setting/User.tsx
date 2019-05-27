import React from 'react'
import { View, Text } from 'react-native'
import {NavigationBar} from "../../components/";

class User extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar leftButton={null} title={'User'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text>
            User
          </Text>
        </View>
      </View>
    )
  }
}

export default User
