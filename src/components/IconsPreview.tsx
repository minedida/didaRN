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
import { material } from 'react-native-typography'
import { Space } from "./";

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

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

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
          <IoniconsIcon color={'#6680d7'} name={'ios-checkbox'} size={40}/>
          <IoniconsIcon color={'#6680d7'} name={'md-checkbox'} size={40}/>
        </Item>

        <Item title={'calendar'}>
          <EntypoIcon color={'#6680d7'} name={'calendar'} size={40}/>
          <FontAwesome5Icon color={'#6680d7'} name={'calendar'} size={40}/>
          <MaterialCommunityIconsIcon color={'#6680d7'} name={'calendar-blank'} size={40}/>
        </Item>

        <Item title={'setting'}>
          <IoniconsIcon color={'#6680d7'} name={'md-settings'} size={40}/>
          <MaterialCommunityIconsIcon color={'#6680d7'} name={'settings'} size={40}/>
          <IoniconsIcon color={'#6680d7'} name={'ios-settings'} size={40}/>
        </Item>

        <Item title={'menu'}>
          <EntypoIcon color={'#6680d7'} name={'menu'} size={40}/>
          <FeatherIcon color={'#6680d7'} name={'menu'} size={40}/>
          <IoniconsIcon color={'#6680d7'} name={'ios-menu'} size={40}/>
          <IoniconsIcon color={'#6680d7'} name={'md-menu'} size={40}/>
          <MaterialCommunityIconsIcon color={'#6680d7'} name={'menu'} size={40}/>
          <SimpleLineIconsIcon color={'#6680d7'} name={'menu'} size={40}/>
        </Item>

        <Item title={'more'}>
          <FeatherIcon color={'#6680d7'} name={'more-vertical'} size={40}/>
          <FeatherIcon color={'#6680d7'} name={'more-horizontal'} size={40}/>
          <IoniconsIcon color={'#6680d7'} name={'ios-more'} size={40}/>
          <IoniconsIcon color={'#6680d7'} name={'md-more'} size={40}/>
        </Item>

        <Item title={'search'}>
          <AntDesignIcon color={'#6680d7'} name={'search1'} size={40}/>
          <FeatherIcon color={'#6680d7'} name={'search'} size={40}/>
          <OcticonsIcon color={'#6680d7'} name={'search'} size={40}/>
        </Item>

        <Item title={'同心圆'}>
          <MaterialCommunityIconsIcon color={'#6680d7'} name={'radiobox-marked'} size={40}/>

        </Item>

        <Space height={120}/>
      </ScrollView>
    )
  }
}

export default IconsPreview
