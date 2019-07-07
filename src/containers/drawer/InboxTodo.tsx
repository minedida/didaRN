import React, { RefObject } from 'react'
import { View, Platform, TextInput, Dimensions, findNodeHandle, UIManager } from 'react-native'
import { inject, observer } from "mobx-react";
import { NavigationBar, CombineTodoList, Tips, Icon, Toast } from "../../components/";
import { t } from "../../helper/utils/ScreenUtil";
import { DrawerStore } from "../../store/DrawerStore";
import { TodoStore } from "../../store/TodoStore";


type Props = {
  drawer: DrawerStore
  todo: TodoStore
}
const isAndroid = Platform.OS === 'android'

// how to pass ref as props: https://stackoverflow.com/questions/37647061/how-do-i-access-refs-of-a-child-component-in-the-parent-component

@inject('drawer', 'todo') @observer
class InboxTodo extends React.Component<Props, { value: string, open: boolean }> {
  menu: RefObject<View>

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      open: false,
    }
    this.onMenuPress = this.onMenuPress.bind(this)
    this.menu = React.createRef<View>();
  }

  onMenuPress() {
    if (!isAndroid) {
      return
    }
    const node = findNodeHandle(this.menu.current) as any;
    UIManager.showPopupMenu(
      node,
      ['显示详细', '隐藏已完成', '排序', '分享', '编辑多个任务'],
      () => {},
      (item: string, index: number | undefined) =>
        Toast.show(`item:${item}\nindex:${index}`)
    )
  }

  renderLeftBtn() {
    return (
      <Icon
        onPress={this.props.drawer.toggleMenu}
        size={isAndroid ? t(20) : t(20)}
        name={isAndroid ? 'md-menu' : 'ios-menu'}
        type={'Ionicons'} color={'#333'}
      />
    )
  }

  renderRightBtn() {
    return (
      <Icon
        ref={this.menu}
        onPress={this.onMenuPress}
        size={isAndroid ? t(20) : t(20)}
        name={isAndroid ? 'md-more' : 'ios-more'}
        type={'Ionicons'} color={'#333'}
      />
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

          <Tips type={'inbox'}/>

          <CombineTodoList
            checkedList={checkedList}
            uncheckedList={uncheckedList}/>

          <TextInput value={this.state.value} placeholder={'添加待办事项'}
                     style={{ position: 'absolute', bottom: 0, left: 0, width: Dimensions.get('window').width }}
                     onSubmitEditing={() => {
                       this.props.todo.addTodo(this.state.value)
                       this.setState({ value: '' })
                     }}
                     onChangeText={(value) => this.setState({ value })}/>
        </View>
      </View>
    )
  }
}

export default InboxTodo
