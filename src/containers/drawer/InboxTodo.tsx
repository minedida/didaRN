import React from 'react'
import { View, TouchableNativeFeedback, Platform, TextInput, Dimensions } from 'react-native'
import { inject, observer } from "mobx-react";
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { ButtonContainer, NavigationBar, CombineTodoList, Toast } from "../../components/";
import { d, t } from "../../helper/utils/ScreenUtil";
import { DrawerStore } from "../../store/DrawerStore";
import { TodoStore } from "../../store/TodoStore";


type Props = {
  drawer: DrawerStore
  todo: TodoStore
}
const isAndroid = Platform.OS === 'android'

@inject('drawer', 'todo') @observer
class InboxTodo extends React.Component<Props, {value: string, open: boolean}> {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
    this.state = {
      value: '',
      open: false
    }
  }

  renderLeftBtn() {
    return (
      <ButtonContainer
        style={{ width: d(26), height: d(26), justifyContent: 'center', alignItems: 'center' }}
        onPress={this.props.drawer.toggleMenu}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
        <IoniconsIcon
          size={isAndroid ? t(20) : t(20)}
          name={isAndroid ? 'md-menu' : 'ios-menu'}
          color={'#333'}/>
      </ButtonContainer>
    )
  }

  renderRightBtn() {
    return (
      <ButtonContainer
        style={{ width: d(44), height: (44), justifyContent: 'center', alignItems: 'center' }}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
        <IoniconsIcon
          size={isAndroid ? t(20) : t(20)}
          name={isAndroid ? 'md-more' : 'ios-more'}
          color={'#333'}/>
      </ButtonContainer>
    )
  }

  onPress() {
    Toast.show('alert')
  }

  render() {
    const { todo: { checkedList, uncheckedList } } = this.props
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'收集箱'} leftButton={this.renderLeftBtn()}
                       rightButton={this.renderRightBtn()}/>

        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <CombineTodoList
            checkedList={checkedList}
            uncheckedList={uncheckedList}/>

          <TextInput value={this.state.value} placeholder={'添加待办事项'}
                     style={{ position: 'absolute', bottom: 0, left: 0, width: Dimensions.get('window').width}}
                     onSubmitEditing={()=> {
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
