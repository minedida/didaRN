import React from 'react'
import { View, Text } from 'react-native'
import { NavigationBar, Space } from "../../components/";
import { SettingNavigationOptions } from "../../navigation/NavigationOptions";
import { material } from "react-native-typography";
import { navigate } from "../../navigation";

class Setting extends React.PureComponent {
  static navigationOptions = SettingNavigationOptions;

  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }
  onPress(type: 'logout' | 'setting') {
    type === 'setting' && navigate('User')
    type === 'logout' && navigate('Auth')
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar leftButton={null} title={'Setting'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text onPress={() => this.onPress('setting')} style={material.button}>Setting</Text>
          <Space height={20}/>
          <Text onPress={() => this.onPress('logout')} style={material.button}>Logout</Text>
        </View>
      </View>
    )
  }
}

export default Setting
