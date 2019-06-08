import React from 'react'
import { View, ScrollView } from 'react-native'
import { NavigationBar, SettingHeader, Icon } from "../../components/";
import { SettingTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";
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
    { id: 'dashboard', title: '选项卡', leftIcon: <Icon type={'MaterialIcons'} color={'#757575'} name={'dashboard'} size={24}/> },
    {
      id: 'checkerboard', title: '主题',
      leftIcon: <Icon type={'MaterialCommunityIcons'} color={'#757575'} name={'checkerboard'} size={24}/>,
      rightView: <View style={{ width: d(24), height: d(24), backgroundColor: 'pink', borderRadius: d(24) }}/>
    },
    { id: 'alarm', title: '声音与提醒', leftIcon: <Icon type={'Ionicons'} color={'#757575'} name={'ios-alarm'} size={24}/> },
    {
      id: 'addtask',
      title: '快速添加任务',
      leftIcon: <Icon type={'MaterialCommunityIcons'} color={'#757575'} name={'playlist-plus'} size={24}/>
    },
    { id: 'settings', title: '更多设置', leftIcon: <Icon type={'Ionicons'} color={'#757575'} name={'md-settings'} size={t(24)}/> },
  ],
  [
    {
      id: 'wechat',
      title: '玩转微信公众号',
      leftIcon: <Icon type={'MaterialCommunityIcons'} color={'#757575'} name={'wechat'} size={24}/>
    },
  ],
  [
    { id: 'rocket', title: '进入引导', leftIcon: <Icon type={'Ionicons'} color={'#757575'} name={'ios-rocket'} size={24}/> },
    { id: 'help', title: '帮助中心', leftIcon: <Icon type={'Ionicons'} color={'#757575'} name={'md-help-buoy'} size={24}/> },
    { id: 'feedback', title: '反馈与建议', leftIcon: <Icon type={'MaterialIcons'} color={'#757575'} name={'feedback'} size={24}/> },
    { id: 'like', title: '推荐滴答清单', leftIcon: <Icon type={'AntDesign'} color={'#757575'} name={'like1'} size={24}/> },
    { id: 'info', title: '关于', leftIcon: <Icon type={'Ionicons'} color={'#757575'} name={'md-information-circle'} size={24}/> },
  ],
]

class SettingTab extends React.PureComponent {
  static navigationOptions = SettingTabNavigationOptions;

  constructor(props) {
    super(props)
    this.onSettingListItemPress = this.onSettingListItemPress.bind(this)
  }

  onSettingListItemPress(type: string) {
    type === 'settings' && navigate('User')
    type === 'header' && navigate('Auth')
    console.log(type)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar leftButton={null} title={'设置'}/>
        <ScrollView endFillColor={'cyan'} style={{ flex: 1, backgroundColor: '#fff' }}>
          <SettingHeader onPress={() => this.onSettingListItemPress('header')}/>

          {configs.map(
            (g, i) =>
            <SettingListGroup key={i}>
              {
                g.map(v =>
                  <SettingListItem key={v.id} onPress={this.onSettingListItemPress} {...v}/>)
              }
            </SettingListGroup>
          )}
        </ScrollView>
      </View>
    )
  }
}

export default SettingTab
