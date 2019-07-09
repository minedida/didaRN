import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image, TouchableNativeFeedback
} from 'react-native';
import { inject, observer } from "mobx-react";
import { DrawerItems, DrawerStore } from "../../store/DrawerStore";
import { Drawer, withTheme, Theme } from 'react-native-paper';
import DeviceConstants from "../../helper/constant/DeviceConstants";
import { d } from "../../helper/utils/ScreenUtil";
import { material } from 'react-native-typography'
import { ButtonContainer, Space, Icon } from "../../components";
import { navigate } from "../../navigation";
import color from 'color';
const { fake_status_bar_padding_for_ios, fake_status_bar_height_for_android } = DeviceConstants
const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width * 0.86,
    height: window.height,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: fake_status_bar_height_for_android,
    width: '100%',
    paddingTop: fake_status_bar_padding_for_ios,
  },
  topView: {
    width: '100%',
    height: d(136),
    alignItems: 'center'
  },
  topIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: d(96)
  },
  avatarView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    padding: d(18)
  },
  btn: {
    width: d(284),
    height: d(32),
    borderRadius: d(6),
    // backgroundColor: '#8de9cc',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
type Props = {
  drawer?: DrawerStore
  theme: Theme
}

type ConfigItem = { label: string, icon: string, id: DrawerItems }
const configs: Array<Array<ConfigItem>> = [
  [
    { label: '今天', icon: 'event-available', id: 'TodayTodo' },
    { label: '收集箱', icon: 'inbox', id: 'InboxTodo' },
    { label: 'Icon预览', icon: 'text-fields', id: 'IconsPreview' },
  ],
  [
    { label: '添加清单', icon: 'add', id: 'AddTodo' },
    { label: '管理清单和标签', icon: 'assignment', id: 'ManageTodo' }
  ]
]

// 852,87 -> 284,30
// 410 -> 136
// 169 -> 56 头像半径
@inject('drawer')
@observer
class DrawerPanel extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress(type: 'avatar' | 'btn' | 'setting') {
    this.props.drawer!.showDrawer = false
    setTimeout(() => {
      'avatar' === type && navigate('Auth')
      'btn' === type && navigate('Auth')
      'setting' === type && navigate('SettingTab', { 'from': 'drawer' })
    }, 250)
  }

  renderTopView() {
    const {
      theme: {colors: {primary}}
    } = this.props
    const green = primary
    const light_green = color(green)
    .rgb()
    .lighten(0.27)
    .string()
    return (
      <View style={[styles.topView, { backgroundColor: green }]}>
        <View style={styles.topIconView}>

          <View style={{ flex: 1, justifyContent: 'center', paddingLeft: d(18) }}>
            <ButtonContainer
              onPress={() => this.onPress('avatar')}
              style={{ width: d(64), height: d(64), borderRadius: d(64 / 2), backgroundColor: '#f2f2f2' }}
              background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
              <Image
                source={{ uri }}
                style={{ width: d(64), height: d(64), borderRadius: d(64) / 2 }}/>

            </ButtonContainer>
          </View>

          <View style={styles.avatarView}>
            <Icon type={'Feather'} color={'#fff'} largeTouchArea
                  name={'search'} size={24} style={{ marginRight: d(22) }}/>
            <Icon onPress={() => this.onPress('setting')}
                  type={'Ionicons'} color={'#fff'} largeTouchArea
                  name={'md-settings'} size={24}/>
          </View>
        </View>
        <ButtonContainer
          onPress={() => this.onPress('btn')}
          activeOpacity={0.6}
          style={[styles.btn, { backgroundColor: light_green}]}>
          <Text style={[material.button, { color: '#fff' }]}>登录或注册</Text>
        </ButtonContainer>
      </View>
    )
  }

  renderDrawerItem() {
    const currentItem = this.props.drawer!.selectedItem
    return (
      <View>
        {
          configs.map((g, i) =>
            <Drawer.Section key={i}>
              {
                g.map(v =>
                  <Drawer.Item onPress={() => this.props.drawer!.onMenuItemSelected(v.id)}
                               key={v.id} active={currentItem === v.id} {...v}/>)
              }
            </Drawer.Section>
          )
        }
      </View>
    )
  }

  render() {
    const {
      theme: {colors: {primary}}
    } = this.props
    return (
      <ScrollView scrollsToTop={false} style={styles.container}>
        <View style={[styles.statusBar, {backgroundColor: primary}]}/>
        {this.renderTopView()}
        <Space height={d(6)}/>
        {this.renderDrawerItem()}
      </ScrollView>
    )
  }
}

export default withTheme(DrawerPanel)
