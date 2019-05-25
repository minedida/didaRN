import React from 'react'
import { View, Text } from 'react-native'

class User extends React.PureComponent{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Text>
          User
        </Text>
      </View>
    )
  }
}
export default User
