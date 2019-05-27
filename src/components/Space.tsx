import React from 'react'
import { View } from 'react-native'

export default ({ height, bgc = undefined }) =>
  <View style={{ width: '100%', height, backgroundColor: bgc }}/>
