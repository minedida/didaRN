import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Avatar, Divider, List, TouchableRipple } from "react-native-paper";
import { d } from "../helper/utils/ScreenUtil";
import { material } from "react-native-typography";

type Props = {
  id?: string,
  onPress: any,
  title: string,
  leftIcon: React.ReactNode,
  rightView?: React.ReactNode
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: d(4),
    height: d(40),
    width: d(40),
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class SettingListItem extends React.PureComponent<Props> {
  render() {
    const {
      onPress, title, id,
      leftIcon, rightView: rightViewProp
    } = this.props
    const leftView = _props => <View style={styles.icon} pointerEvents="box-none">{leftIcon}</View>
    const rightView = _props => rightViewProp
    return (
      <View>
        <TouchableRipple
          rippleColor={Platform.OS === 'ios' ? "rgba(215,77,167,0.32)" : "rgba(0, 0, 0, .12)"}
          onPress={() => onPress(id)}>
          <List.Item
            style={{ height: d(52), alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
            title={title}
            left={leftView}
            right={rightView}/>
        </TouchableRipple>
      </View>
    )
  }
}

const SettingListGroup = (props: any) =>
  <View>
    <Divider style={{ backgroundColor: '#333', opacity: 0.4, marginLeft: d(18) }}/>
    <View style={{ paddingVertical: d(12) }}>
      {props.children}
    </View>
  </View>

const SettingHeader = () =>
  <View style={{ width: '100%', height: d(90) }}>
    <TouchableRipple
      rippleColor={Platform.OS === 'ios' ? "rgba(215,77,167,0.32)" : "rgba(0, 0, 0, .12)"}
      style={{ paddingLeft: d(4), height: d(76), justifyContent: 'center' }}
      onPress={() => console.log('Pressed')}>
      <List.Item
        style={{ justifyContent: 'center' }}
        left={_props => <Avatar.Icon size={52} style={{ backgroundColor: '#62d6c5' }} icon="folder"/>}
        titleStyle={[material.title, { fontSize: 18, paddingLeft: d(8) }]}
        title="登录或注册"/>
    </TouchableRipple>
  </View>

export {
  SettingListItem,
  SettingListGroup,
  SettingHeader
}
