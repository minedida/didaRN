import React from 'react'
import { View, Text } from 'react-native'
import {NavigationBar} from "../../components/";
import { CalendarTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";
import { material } from 'react-native-typography'

class CalendarTab extends React.PureComponent {
  static navigationOptions = CalendarTabNavigationOptions
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar leftButton={null} title={'CalendarTab'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text style={material.body2}>
            CalendarTab
          </Text>
        </View>
      </View>
    )
  }
}

export default CalendarTab
