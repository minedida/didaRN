import React from 'react'
import { View, Text } from 'react-native'
import {NavigationBar} from "../../components/";
import { material } from "react-native-typography";

class User extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'User'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text style={material.button}>
            User
          </Text>
        </View>
      </View>
    )
  }
}

export default User
