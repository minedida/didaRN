import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { inject, observer } from "mobx-react";
import { DrawerStore } from "../../store/DrawerStore";
import DeviceConstants from "../../helper/constant/DeviceConstants";
import { d } from "../../helper/utils/ScreenUtil";
import { material } from 'react-native-typography'
import { Drawer, Avatar } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { ButtonContainer, Space } from "../../components";

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
    backgroundColor: '#06ce90'
  },
  topView: {
    width: '100%',
    height: d(136),
    backgroundColor: '#06ce90',
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
    backgroundColor: '#8de9cc',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
type Props = {
  drawer?: DrawerStore
}

// 852,87 -> 284,30
// 410 -> 136
// 169 -> 56 头像半径
@inject('drawer')
@observer
class DrawerPanel extends React.Component<Props> {

  renderTopView() {
    return (
      <View style={styles.topView}>
        <View style={styles.topIconView}>
          <View style={{ flex: 1, justifyContent: 'center', paddingLeft: d(18) }}>
            <Avatar.Image source={{ uri }} style={{ backgroundColor: '#f2f2f2' }}/>
          </View>
          <View style={styles.avatarView}>
            <View style={{ paddingRight: d(22) }}>
              <FeatherIcon color={'#fff'} name={'search'} size={24}/>
            </View>
            <IoniconsIcon color={'#fff'} name={'md-settings'} size={24}/>
          </View>
        </View>
        <ButtonContainer
          activeOpacity={0.6}
          style={styles.btn}>
          <Text style={[material.button, { color: '#fff' }]}>登录或注册</Text>
        </ButtonContainer>
      </View>
    )
  }

  renderDrawerItem() {
    const currentItem = this.props.drawer!.selectedItem
    return (
      <View>
        <Drawer.Section>
          <Space height={d(6)}/>
          <Drawer.Item
            label="今天"
            icon={'event-available'}
            active={currentItem === 'TodayTodo'}
            onPress={() => this.props.drawer!.onMenuItemSelected('TodayTodo')}
          />
          <Drawer.Item
            label="收集箱"
            icon={'inbox'}
            active={currentItem === 'InboxTodo'}
            onPress={() => this.props.drawer!.onMenuItemSelected('InboxTodo')}
          />
        </Drawer.Section>
        <Drawer.Item
          label="添加清单"
          icon={'add'}
          active={currentItem === 'AddTodo'}
          onPress={() => this.props.drawer!.onMenuItemSelected('AddTodo')}
        />
        <Drawer.Item
          label="管理清单和标签"
          icon={'assignment'}
          active={currentItem === 'ManageTodo'}
          onPress={() => this.props.drawer!.onMenuItemSelected('ManageTodo')}
        />
      </View>
    )
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.container}>
        <View style={styles.statusBar}/>
        {this.renderTopView()}
        {this.renderDrawerItem()}
      </ScrollView>
    )
  }
}

export default DrawerPanel
