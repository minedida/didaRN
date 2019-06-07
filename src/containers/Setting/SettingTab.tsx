import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { NavigationBar, SettingHeader, Space } from "../../components/";
import { SettingTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";
import { material } from "react-native-typography";
import { navigate } from "../../navigation";
import { d, t } from "../../helper/utils/ScreenUtil";
import { SettingListItem, SettingListGroup } from "../../components/";

type ConfigItem = {
  id: string,
  title: string,
  leftIcon: React.ReactNode,
  rightView?: React.ReactNode,
}
const configs: Array<Array<ConfigItem>> = [
  [
    { id: 'dashboard', title: '选项卡', leftIcon: <MaterialIconsIcon color={'#757575'} name={'dashboard'} size={24}/> },
    {
      id: 'checkerboard', title: '主题',
      leftIcon: <MaterialCommunityIconsIcon color={'#757575'} name={'checkerboard'} size={24}/>,
      rightView: <View style={{ width: d(24), height: d(24), backgroundColor: 'pink', borderRadius: d(24) }}/>
    },
    { id: 'alarm', title: '声音与提醒', leftIcon: <IoniconsIcon color={'#757575'} name={'ios-alarm'} size={24}/> },
    {
      id: 'addtask',
      title: '快速添加任务',
      leftIcon: <MaterialCommunityIconsIcon color={'#757575'} name={'playlist-plus'} size={24}/>
    },
    { id: 'settings', title: '更多设置', leftIcon: <IoniconsIcon color={'#757575'} name={'md-settings'} size={t(24)}/> },
  ],
  [
    {
      id: 'wechat',
      title: '玩转微信公众号',
      leftIcon: <MaterialCommunityIconsIcon color={'#757575'} name={'wechat'} size={24}/>
    },
  ],
  [
    { id: 'rocket', title: '进入引导', leftIcon: <IoniconsIcon color={'#757575'} name={'ios-rocket'} size={24}/> },
    { id: 'help', title: '帮助中心', leftIcon: <IoniconsIcon color={'#757575'} name={'md-help-buoy'} size={24}/> },
    { id: 'feedback', title: '反馈与建议', leftIcon: <MaterialIconsIcon color={'#757575'} name={'feedback'} size={24}/> },
    { id: 'like', title: '推荐滴答清单', leftIcon: <AntDesignIcon color={'#757575'} name={'like1'} size={24}/> },
    { id: 'info', title: '关于', leftIcon: <IoniconsIcon color={'#757575'} name={'md-information-circle'} size={24}/> },
  ],
]

class SettingTab extends React.PureComponent {
  static navigationOptions = SettingTabNavigationOptions;

  constructor(props) {
    super(props)
    this.onSettingListItemPress = this.onSettingListItemPress.bind(this)
  }

  onSettingListItemPress(type: string) {
    type === 'setting' && navigate('User')
    type === 'logout' && navigate('Auth')
    console.log(type)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar leftButton={null} title={'设置'}/>
        <ScrollView endFillColor={'cyan'} style={{ flex: 1, backgroundColor: '#fff' }}>
          <SettingHeader/>

          {configs.map(
            (g, i) =>
            <SettingListGroup key={i}>
              {
                g.map(v =>
                  <SettingListItem key={v.id} onPress={this.onSettingListItemPress} {...v}/>)
              }
            </SettingListGroup>
          )}


          <Text onPress={() => this.onSettingListItemPress('setting')} style={material.button}>SettingTab</Text>
          <Space height={20}/>
          <Text onPress={() => this.onSettingListItemPress('logout')} style={material.button}>Logout</Text>
        </ScrollView>
      </View>
    )
  }
}

export default SettingTab