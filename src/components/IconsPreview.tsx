import React from 'react'
import { View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class IconsPreview extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <IoniconsIcon color={'#6680d7'} name={'ios-checkbox'} size={40}/>
        <IoniconsIcon color={'#6680d7'} name={'md-checkbox'} size={40}/>

        <EntypoIcon color={'#6680d7'} name={'calendar'} size={40}/>
        <FontAwesome5Icon color={'#6680d7'} name={'calendar'} size={40}/>
        <MaterialCommunityIconsIcon color={'#6680d7'} name={'calendar-blank'} size={40}/>


        <IoniconsIcon color={'#6680d7'} name={'md-settings'} size={40}/>
        <MaterialCommunityIconsIcon color={'#6680d7'} name={'settings'} size={40}/>
        <IoniconsIcon color={'#6680d7'} name={'ios-settings'} size={40}/>
      </View>
    )
  }
}

export default IconsPreview
