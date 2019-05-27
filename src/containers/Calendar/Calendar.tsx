import React from 'react'
import { View, Text } from 'react-native'
import {NavigationBar} from "../../components/";
import { CalendarNavigationOptions } from "../../navigation/NavigationOptions";

class Calendar extends React.PureComponent {
  static navigationOptions = CalendarNavigationOptions
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar leftButton={null} title={'Calendar'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text>
            Calendar
          </Text>
        </View>
      </View>
    )
  }
}

export default Calendar
