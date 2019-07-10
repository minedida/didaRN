import React from 'react'
import { View, Text, Share } from 'react-native'
import { Toast } from "../../src/components";

/**
 * RN原生提供的share太弱鸡了
 * 在安卓上不论成功还是失败永远回调一个值 `In Android, Returns a Promise which always be resolved with action being 'Share.sharedAction'.`
 * 暂时不知道怎么分享文件、资源
 */
class RNShareDemo extends React.Component {
  toShare = async () => {
    const shareContent = {
      title: '标题',
      message: '你好'
    }
    const result = await Share.share(shareContent)
    Toast.show(`result:${JSON.stringify(result)}`)
  }

  render() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={this.toShare}>RNShareDemo</Text>
    </View>
  }
}

export default RNShareDemo
