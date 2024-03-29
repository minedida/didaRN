import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import color from 'color';
import { inject, observer } from "mobx-react";
import { DrawerItemsProps } from "react-navigation";
import { material } from 'react-native-typography'
import { Drawer, withTheme, Theme } from 'react-native-paper';
import { ButtonContainer, Space, Icon } from "../../components";
import { DeviceSize } from "../../helper/constant/DeviceConstants";
import { DrawerItems, DrawerStore } from "../../store/DrawerStore";
import { d } from "../../helper/utils/ScreenUtil";
import { navigate } from "../../navigation";

const { fake_status_bar_padding_for_ios, fake_status_bar_height_for_android } = DeviceSize
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: fake_status_bar_height_for_android,
    width: '100%',
    paddingTop: fake_status_bar_padding_for_ios,
  },
  topView: {
    width: '100%',
    height: d(120),
    alignItems: 'center'
  },
  topIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: d(86)
  },
  avatarView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    padding: d(18),
    paddingRight: d(8)
  },
  btn: {
    width: d(300),
    height: d(28),
    borderRadius: d(6),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
type Props = {
  drawer?: DrawerStore
  theme: Theme
} & DrawerItemsProps

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

  onPress(type: 'avatar' | 'auth' | 'setting') {
    this.props.drawer!.showDrawer = false
    'avatar' === type && navigate('Auth')
    'auth' === type && navigate('Auth')
    'setting' === type && navigate('SettingTab2', { 'from': 'drawer' })
  }

  renderTopView() {
    const {
      theme: { colors: { primary } }
    } = this.props
    const light_primary = color(primary).rgb().lighten(0.27).string()
    return (
      <View
        style={[
          styles.topView,
          { backgroundColor: primary }
        ]}
      >
        <View
          style={styles.topIconView}
        >

          <View
            style={{ flex: 1, justifyContent: 'center', paddingLeft: d(18) }}
          >
            <ButtonContainer
              onPress={() => this.onPress('avatar')}
              style={{ width: d(64), height: d(64),
                borderRadius: d(64 / 2), backgroundColor: '#f2f2f2' }}
              background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
            >
              <Image
                source={{ uri }}
                style={{ width: d(64), height: d(64), borderRadius: d(64) / 2 }}
              />

            </ButtonContainer>
          </View>

          <View
            style={styles.avatarView}
          >
            <Icon
              largeTouchArea
              type={'Feather'}
              color={'#fff'}
              name={'search'}
              size={24}
              style={{ marginRight: d(22) }}
            />
            <Icon
              largeTouchArea
              type={'Ionicons'} color={'#fff'}
              size={24}
              name={'md-settings'}
              onPress={() => this.onPress('setting')}
            />
          </View>
        </View>
        <ButtonContainer
          onPress={() => this.onPress('auth')}
          activeOpacity={0.6}
          style={[styles.btn, { backgroundColor: light_primary }]}>
          <Text
            style={[material.button, { color: '#fff' }]}
          >
            登录或注册
          </Text>
        </ButtonContainer>
      </View>
    )
  }

  renderDrawerItem() {
    const currentItem = this.props.drawer!.selectedItem
    return (
      <>
        {
          configs.map((g, i) =>
            <Drawer.Section key={i}>
              {
                g.map(v =>
                  <Drawer.Item
                    key={v.id}
                    onPress={() => this.props.drawer!.onMenuItemSelected(v.id)}
                    active={currentItem === v.id}
                    {...v}
                  />)
              }
            </Drawer.Section>
          )
        }
      </>
    )
  }

  render() {
    console.log('DrawerPanel-this.props', this.props)
    const {
      theme: { colors: { primary } }
    } = this.props
    return (
      <ScrollView
        scrollsToTop={false}
        style={styles.container}
      >
        <View
          style={[
            styles.statusBar,
            { backgroundColor: primary }
          ]}
        />
        {this.renderTopView()}
        <Space height={d(6)}/>
        {this.renderDrawerItem()}
      </ScrollView>
    )
  }
}

export default withTheme(DrawerPanel)
