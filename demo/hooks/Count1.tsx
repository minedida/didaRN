import React from 'react'
import { View, Text, Button } from 'react-native'

class Count1 extends React.Component {
  state = {
    count: 0
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decrease = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count:{this.state.count}</Text>
      <Button title={'增加'} onPress={this.increase}/>
      <Button title={'减少'} onPress={this.decrease}/>
    </View>
  }
}

export default Count1
