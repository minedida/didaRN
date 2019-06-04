import React from 'react'
import { View, ScrollView, Text, Dimensions } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import { material } from 'react-native-typography'
import { NavigationBar, Space } from "./";

const Item = ({ title, children }) => (
  <View style={{ width, marginTop: 20 }}>
    <Text style={[{ paddingHorizontal: 20 }, material.headline]}>{title}</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-around' }}>
      {
        !children.length ? children :
          children.map((child, key) => <View key={`${title}${key}`} style={{ paddingRight: 20 }}>{child}</View>)
      }
    </View>
  </View>
)
const { width } = Dimensions.get('window')

class IconsPreview extends React.PureComponent {
  scrollView: any

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={'IconsPreview'} leftButton={null}/>
        <ScrollView ref={ref => this.scrollView = ref}
                    onContentSizeChange={_ => this.scrollView.scrollToEnd({ animated: false })}>
          <Item title={'back'}>
            <FeatherIcon color={'#333'} name={'chevron-left'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-arrow-back'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-arrow-back'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-arrow-round-back'} size={40}/>
            <MaterialIconsIcon color={'#333'} name={'arrow-back'} size={40}/>
            <MaterialIconsIcon color={'#333'} name={'keyboard-backspace'} size={40}/>
            <FeatherIcon color={'#333'} name={'arrow-left'} size={40}/>
          </Item>

          <Item title={'check'}>
            <IoniconsIcon color={'#333'} name={'ios-checkbox'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-checkbox'} size={40}/>
          </Item>

          <Item title={'calendar'}>
            <EntypoIcon color={'#333'} name={'calendar'} size={40}/>
            <FontAwesome5Icon color={'#333'} name={'calendar'} size={40}/>
            <MaterialCommunityIconsIcon color={'#333'} name={'calendar-blank'} size={40}/>
          </Item>

          <Item title={'setting'}>
            <IoniconsIcon color={'#333'} name={'md-settings'} size={40}/>
            <MaterialCommunityIconsIcon color={'#333'} name={'settings'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-settings'} size={40}/>
          </Item>

          <Item title={'menu'}>
            <EntypoIcon color={'#333'} name={'menu'} size={40}/>
            <FeatherIcon color={'#333'} name={'menu'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-menu'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-menu'} size={40}/>
            <MaterialCommunityIconsIcon color={'#333'} name={'menu'} size={40}/>
            <SimpleLineIconsIcon color={'#333'} name={'menu'} size={40}/>
          </Item>

          <Item title={'more'}>
            <FeatherIcon color={'#333'} name={'more-vertical'} size={40}/>
            <FeatherIcon color={'#333'} name={'more-horizontal'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-more'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-more'} size={40}/>
          </Item>

          <Item title={'search'}>
            <AntDesignIcon color={'#333'} name={'search1'} size={40}/>
            <FeatherIcon color={'#333'} name={'search'} size={40}/>
            <OcticonsIcon color={'#333'} name={'search'} size={40}/>
          </Item>

          <Item title={'同心圆'}>
            <MaterialCommunityIconsIcon color={'#333'} name={'radiobox-marked'} size={40}/>
          </Item>

          <Item title={'主题'}>
            <IoniconsIcon color={'#333'} name={'ios-water'} size={40}/>
            <MaterialCommunityIconsIcon color={'#333'} name={'checkerboard'} size={40}/>
          </Item>

          <Item title={'选项卡'}>
            <MaterialIconsIcon color={'#333'} name={'dashboard'} size={40}/>
          </Item>

          <Item title={'clock'}>
            <FoundationIcon color={'#333'} name={'clock'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-clock'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-alarm'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-alarm'} size={40}/>
            <FeatherIcon color={'#333'} name={'clock'} size={40}/>
          </Item>

          <Item title={'快速添加'}>
            <MaterialCommunityIconsIcon color={'#333'} name={'playlist-plus'} size={40}/>
          </Item>

          <Item title={'微信'}>
            <MaterialCommunityIconsIcon color={'#333'} name={'wechat'} size={40}/>
          </Item>

          <Item title={'进入引导'}>
            <FontAwesome5Icon color={'#333'} name={'rocket'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-rocket'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-rocket'} size={40}/>
          </Item>

          <Item title={'帮助中心'}>
            <IoniconsIcon color={'#333'} name={'ios-help-buoy'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-help-buoy'} size={40}/>
          </Item>

          <Item title={'反馈与建议'}>
            <MaterialIconsIcon color={'#333'} name={'feedback'} size={40}/>
          </Item>


          <Item title={'推荐'}>
            <AntDesignIcon color={'#333'} name={'like1'} size={40}/>
          </Item>


          <Item title={'关于'}>
            <EntypoIcon color={'#333'} name={'info-with-circle'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-information-circle'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-information-circle'} size={40}/>
          </Item>

          <Item title={'mail'}>
            <AntDesignIcon color={'#333'} name={'mail'} size={40}/>
            <FoundationIcon color={'#333'} name={'mail'} size={40}/>
            <IoniconsIcon color={'#333'} name={'ios-mail'} size={40}/>
            <IoniconsIcon color={'#333'} name={'md-mail'} size={40}/>
            <MaterialCommunityIconsIcon color={'#333'} name={'email'} size={40}/>

          </Item>

          <Space height={120}/>
        </ScrollView>
      </View>
    )
  }
}

export default IconsPreview
