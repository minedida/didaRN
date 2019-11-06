import React from 'react'
import { View, Text } from 'react-native'
import { useSafeArea } from "react-native-safe-area-context";

const SafeAreaContextDemo = () => {
  const safeAreaInsets = useSafeArea()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        paddingTop: safeAreaInsets.top,
        paddingBottom: safeAreaInsets.bottom,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
      }}
    >
      <Text
        style={{
          fontSize: 50,
        }}
      >
        SafeAreaContextDemo
      </Text>
    </View>
  )
}

export default SafeAreaContextDemo
