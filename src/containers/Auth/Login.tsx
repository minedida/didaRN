import React from 'react'
import { View, Text } from 'react-native'
import { NavigationPops } from "../../navigation/utils";

type Props = {
  navigation: NavigationPops
}

class Login extends React.PureComponent<Props>{
  onPress(type: string) {
    if ( 'Login' === type) {
      this.props.navigation.navigate('App')
    }
    if ('GoRegister' === type) {
      this.props.navigation.navigate('Register')
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text onPress={() => this.onPress('Login')}>Login</Text>
        <Text onPress={() => this.onPress('GoRegister')}>GoRegister</Text>
      </View>
    )
  }
}
export default Login