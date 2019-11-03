import React from 'react'
import { View, Text } from 'react-native'
import { navigate } from "../../src/navigation";
import { defaultNavigationOptions } from "../DemoUtil";

export const Nested1 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text
      onPress={() => {
        navigate('Nested2')
      }}
    >Nested1</Text>
  </View>
)
Nested1.navigationOptions = (props) => defaultNavigationOptions(props)

export const Nested2 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text
      onPress={() => {
        alert('asd')
      }}
    >Nested2</Text>
  </View>
)
