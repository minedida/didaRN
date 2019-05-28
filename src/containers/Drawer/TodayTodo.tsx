import React from 'react'
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { ButtonContainer, NavigationBar, Space } from "../../components/";
import { material } from "react-native-typography";
import { d, t } from "../../helper/utils/ScreenUtil";
import { inject, observer } from "mobx-react";
import { DrawerStore } from "../../store/DrawerStore";
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const isAndroid = Platform.OS === 'android'

type Props = {
  drawer: DrawerStore
}

@inject('drawer') @observer
class TodayTodo extends React.Component<Props> {
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
        style={{ width: d(44),height: (44), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
        <MaterialCommunityIconsIcon
          size={isAndroid ? t(20): t(20)}
          name={'radiobox-marked'}
          color={'#333'}/>
          <Space width={40}/>
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
        <NavigationBar title={'今天'} leftButton={this.renderLeftBtn()} rightButton={this.renderRightBtn()}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text style={material.button}>
            TodayTodo
          </Text>
        </View>
      </View>
    )
  }
}

export default TodayTodo
