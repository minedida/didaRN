import React, { RefObject } from 'react'
import { View, Platform, findNodeHandle, UIManager, StyleSheet } from 'react-native'
import { inject, observer } from "mobx-react";
import { NavigationBar, CombineTodoList, Tips, Icon, Toast, ElevationSpace } from "../../components/";
import { t } from "../../helper/utils/ScreenUtil";
import { DrawerStore } from "../../store/DrawerStore";
import { TodoStore } from "../../store/TodoStore";

const styles = StyleSheet.create({
  anchorView: {
    backgroundColor: 'transparent',
    width: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    ...StyleSheet.absoluteFillObject,
  }
})
type Props = {
  drawer: DrawerStore
  todo: TodoStore
}
const isAndroid = Platform.OS === 'android'

// how to pass ref as props: https://stackoverflow.com/questions/37647061/how-do-i-access-refs-of-a-child-component-in-the-parent-component

@inject('drawer', 'todo') @observer
class InboxTodo extends React.Component<Props, any> {
  menu: RefObject<View>

  constructor(props) {
    super(props)
    this.onMenuPress = this.onMenuPress.bind(this)
    this.menu = React.createRef<View>();
  }

  onMenuPress() {
    if (!isAndroid) {
      return
    }
    // pop-up-dialog on android and actionsheet on ios
    // https://github.com/Noitidart/react-native-popup-menu-android
    const node = findNodeHandle(this.menu.current) as any;
    const items = ['显示详细', '隐藏已完成', '排序', '分享', '编辑多个任务']
    UIManager.showPopupMenu(
      node,
      items,
      () => {},
      (_item: string, index: number | undefined) =>
      {
        if (index !== undefined) {
          Toast.show(`点击了:${items[index]}`)
        }
      }
    )
  }

  renderLeftBtn() {
    return (
      <Icon
        largeTouchArea
        onPress={this.props.drawer.toggleMenu}
        size={isAndroid ? t(20) : t(20)}
        name={isAndroid ? 'md-menu' : 'ios-menu'}
        type={'Ionicons'} color={'#333'}/>
    )
  }

  // how to pass ref as props:
  // https://stackoverflow.com/questions/37647061/how-do-i-access-refs-of-a-child-component-in-the-parent-component
  renderRightBtn() {
    return (
      <View>
        <Icon
          largeTouchArea
          onPress={this.onMenuPress}
          size={isAndroid ? t(20) : t(20)}
          name={isAndroid ? 'md-more' : 'ios-more'}
          type={'Ionicons'} color={'#333'}/>
        {/* We need this view as an anchor for drop down menu. findNodeHandle can
            find just view with width and height, even it needs backgroundColor
            ref: react-native-material-ui/src/Toolbar/RightElement.react.js line.186
        */}

        <View ref={this.menu} style={styles.anchorView}/>
      </View>
    )
  }

  render() {
    // todo 等到todolist的多条目改造完成后，将todolist的header暴露出来，这里就可以将Tips用作header
    const { todo: { checkedList, uncheckedList } } = this.props
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'收集箱'} leftButton={this.renderLeftBtn()}
                       rightButton={this.renderRightBtn()}/>

        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <ElevationSpace/>
          <Tips type={'inbox'}/>
          <CombineTodoList
            checkedList={checkedList}
            uncheckedList={uncheckedList}/>

        </View>
      </View>
    )
  }
}

export default InboxTodo
// export default listenKeyboard(InboxTodo)
