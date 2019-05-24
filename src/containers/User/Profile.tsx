import React from 'react'
import { View, Text } from 'react-native'
import { NavigationPops } from "../../navigation/utils";

type Props = {
  navigation: NavigationPops
}
class Profile extends React.PureComponent<Props>{
  onPress(type: string) {
    if ('logout' === type) {
     this.props.navigation.navigate('Auth')
    }
    if ('setting' === type) {
      this.props.navigation.navigate('Settings')
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text onPress={() => this.onPress('setting')}>Profile</Text>
        <Text onPress={() => this.onPress('logout')}>logout</Text>
      </View>
    )
  }
}
export default Profile
