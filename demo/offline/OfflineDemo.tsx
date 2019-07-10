import React from 'react'
import { View, Text, NetInfo } from 'react-native'

/**
 * isConnected:boolean. 当连接wifi或者流量时只要通网就为true
 * connectionInfo:{ type: 'cellular' | 'wifi' | 'none', effectiveType: '2g' |'3g' |'4g' | 'unknown' }
 */

class OfflineDemo extends React.Component {
  state = {
    isConnected: false // 联网？断网？
  }
  async componentDidMount() {

    this.setState({
      isConnected: await NetInfo.isConnected.fetch()
    })
    NetInfo.addEventListener("connectionChange", this.handleConnectionChange)
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectionChange
    )
  }

  /**
   *
   * @param connectionInfo:{ type: 'cellular' | 'wifi' | 'none', effectiveType: '4g' | 'unknown' }
   */
  handleConnectionChange = async _connectionInfo => {
    this.setState({
      isConnected: await NetInfo.isConnected.fetch()
    })
  }
  render() {
    const {isConnected} = this.state

    const txt = `isConnected is: ${isConnected}`
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{txt}</Text>
      </View>
    )
  }
}

export default OfflineDemo
