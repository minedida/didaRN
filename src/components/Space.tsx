import React from 'react'
import { View } from 'react-native'

export default ({ height = 0, width = 0, bgc = 'transparent' }) => height ?
  <View style={{ width: '100%', height, backgroundColor: bgc }}/> :
  <View style={{ height: '100%', width, backgroundColor: bgc }}/>
