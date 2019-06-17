import React from 'react'
import { View, ScrollView, Text, Dimensions, Image } from 'react-native'
import { material } from 'react-native-typography'
import { Space, Icon } from "../../components";
import { Images } from "../../assets";

const Item = ({ title, children }) => (
  <View style={{ width, marginTop: 20 }}>
    <Text style={[{ paddingHorizontal: 20 }, material.headline]}>{title}</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-around' }}>
      {
        !children.length ? children :
          children.map((child, key) =>
            <View key={`${title}${key}`} style={{ paddingRight: 20 }}>{child}</View>)
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
        <ScrollView ref={ref => this.scrollView = ref}
                    onContentSizeChange={_ => this.scrollView.scrollToEnd({ animated: false })}>
          <Item title={'back'}>
            <Icon type={'Feather'} color={'#333'} name={'chevron-left'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-arrow-back'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-arrow-back'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-arrow-round-back'} size={40}/>
            <Icon type={'MaterialIcons'} color={'#333'} name={'arrow-back'} size={40}/>
            <Icon type={'MaterialIcons'} color={'#333'} name={'keyboard-backspace'} size={40}/>
            <Icon type={'Feather'} color={'#333'} name={'arrow-left'} size={40}/>
          </Item>

          <Item title={'check'}>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-checkbox'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-checkbox'} size={40}/>
          </Item>

          <Item title={'calendar'}>
            <Icon type={'Entypo'} color={'#333'} name={'calendar'} size={40}/>
            <Icon type={'FontAwesome5'} color={'#333'} name={'calendar'} size={40}/>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'calendar-blank'} size={40}/>
          </Item>

          <Item title={'setting'}>
            <Icon type={'Ionicons'} color={'#333'} name={'md-settings'} size={40}/>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'settings'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-settings'} size={40}/>
          </Item>

          <Item title={'menu'}>
            <Icon type={'Entypo'} color={'#333'} name={'menu'} size={40}/>
            <Icon type={'Feather'} color={'#333'} name={'menu'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-menu'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-menu'} size={40}/>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'menu'} size={40}/>
            <Icon type={'SimpleLineIcons'} color={'#333'} name={'menu'} size={40}/>
          </Item>

          <Item title={'more'}>
            <Icon type={'Feather'} color={'#333'} name={'more-vertical'} size={40}/>
            <Icon type={'Feather'} color={'#333'} name={'more-horizontal'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-more'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-more'} size={40}/>
          </Item>

          <Item title={'search'}>
            <Icon type={'AntDesign'} color={'#333'} name={'search1'} size={40}/>
            <Icon type={'Feather'} color={'#333'} name={'search'} size={40}/>
            <Icon type={'Octicons'} color={'#333'} name={'search'} size={40}/>
          </Item>

          <Item title={'同心圆'}>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'radiobox-marked'} size={40}/>
          </Item>

          <Item title={'主题'}>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-water'} size={40}/>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'checkerboard'} size={40}/>
          </Item>

          <Item title={'选项卡'}>
            <Icon type={'MaterialIcons'} color={'#333'} name={'dashboard'} size={40}/>
          </Item>

          <Item title={'clock'}>
            <Icon type={'Foundation'} color={'#333'} name={'clock'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-clock'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-alarm'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-clock'} size={40}/>
            <Icon type={'Feather'} color={'#333'} name={'clock'} size={40}/>
          </Item>

          <Item title={'快速添加'}>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'playlist-plus'} size={40}/>
          </Item>

          <Item title={'微信'}>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'wechat'} size={40}/>
          </Item>

          <Item title={'进入引导'}>
            <Icon type={'FontAwesome5'} color={'#333'} name={'rocket'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-rocket'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-rocket'} size={40}/>
          </Item>

          <Item title={'帮助中心'}>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-help-buoy'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-help-buoy'} size={40}/>
          </Item>

          <Item title={'反馈与建议'}>
            <Icon type={'MaterialIcons'} color={'#333'} name={'feedback'} size={40}/>
          </Item>


          <Item title={'推荐'}>
            <Icon type={'AntDesign'} color={'#333'} name={'like1'} size={40}/>
          </Item>


          <Item title={'关于'}>
            <Icon type={'Entypo'} color={'#333'} name={'info-with-circle'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-information-circle'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-information-circle'} size={40}/>
          </Item>

          <Item title={'mail'}>
            <Icon type={'AntDesign'} color={'#333'} name={'mail'} size={40}/>
            <Icon type={'Foundation'} color={'#333'} name={'mail'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'ios-mail'} size={40}/>
            <Icon type={'Ionicons'} color={'#333'} name={'md-mail'} size={40}/>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'email'} size={40}/>
          </Item>

          <Item title={'日历'}>
            {Object.keys(Images.icon).map((item, index) =>
              <Image key={index} source={Images.icon[`${item}`]}/>)}
          </Item>

          <Item title={'番茄'}>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'spa'} size={40}/>
            <Icon type={'MaterialCommunityIcons'} color={'#333'} name={'tennis-ball'} size={40}/>
          </Item>

          <Space height={120}/>
        </ScrollView>
      </View>
    )
  }
}

export default IconsPreview
