import React from 'react'
import { View, TouchableNativeFeedback, Platform } from 'react-native'
import { ButtonContainer, IconsPreview, NavigationBar } from "../../components/";
import { d, t } from "../../helper/utils/ScreenUtil";
import { DrawerStore } from "../../store/DrawerStore";
import { inject, observer } from "mobx-react";
import IoniconsIcon from 'react-native-vector-icons/Ionicons';


type Props = {
  drawer: DrawerStore
}
const isAndroid = Platform.OS === 'android'

@inject('drawer') @observer
class InboxTodo extends React.Component<Props> {

  renderLeftBtn() {
    return (
      <ButtonContainer
        style={{ width: d(26), height: d(26), justifyContent: 'center', alignItems: 'center' }}
        onPress={this.props.drawer.toggleMenu}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
        <IoniconsIcon
          size={isAndroid ? t(20): t(20)}
          name={isAndroid ? 'md-menu' : 'ios-menu'}
          color={'#333'} />
      </ButtonContainer>
    )
  }
  renderRightBtn() {
    return (
      <ButtonContainer
        style={{ width: d(44),height: (44), justifyContent: 'center', alignItems: 'center' }}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
        <IoniconsIcon
          size={isAndroid ? t(20): t(20)}
          name={isAndroid ? 'md-more' : 'ios-more'}
          color={'#333'} />
      </ButtonContainer>
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'收集箱'} leftButton={this.renderLeftBtn()} rightButton={this.renderRightBtn()}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <IconsPreview/>
        </View>
      </View>
    )
  }
}

export default InboxTodo
