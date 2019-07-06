import React from 'react'
import { Toolbar } from 'react-native-material-ui';
import { View, findNodeHandle, UIManager, Text, Platform } from "react-native";

const isAndroid = Platform.OS === 'android'
class ToolbarHeader extends React.Component {
  private menu: any

  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    if (!isAndroid) {
      return
    }
    const node = findNodeHandle(this.menu) as any;
    UIManager.showPopupMenu(
      node,
      ['苹果', '香蕉', '梨'],
      () => {},
      (item: string, index: number | undefined) => alert(`item:${item}\nindex:${index}`)
    )
  }

  render() {
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
      <Toolbar
        leftElement="menu"
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
        rightElement={{
          menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
          }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
      <Text ref={ref => this.menu = ref} onPress={this.onPress} style={{ textAlign: 'center' }}>弹出弹出</Text>

    </View>
  }
}

export default ToolbarHeader
