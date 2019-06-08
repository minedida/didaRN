import React from 'react'
import { View, Text } from 'react-native'
import {NavigationBar} from "../../components/";
import { material } from "react-native-typography";

class ManageTodo extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'ManageTodo'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text style={material.button}>
            ManageTodo
          </Text>
        </View>
      </View>
    )
  }
}

export default ManageTodo
