import React from 'react'
import { View, Text } from 'react-native'

class Todo extends React.PureComponent{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'greenyellow'}}>
        <Text>
          Todo
        </Text>
      </View>
    )
  }
}
export default Todo
