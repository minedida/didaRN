import React from 'react';
import { View, Text } from 'react-native';
import BoxShadow from './react-native-shadow/BoxShadow';

const shadowOpt = {
  width: 294,
  height: 60,
  color: '#4563cd',
  border: 30,
  radius: 30,
  opacity: 0.14,
  x: 0,
  y: 0,
  style: { marginVertical: 0 },
};
const ShadowDemo2 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <BoxShadow setting={shadowOpt}>
      <View
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          borderRadius: 30,
          overflow: 'hidden',
        }}>
      </View>
    </BoxShadow>
    <View
      style={{
        width: 294,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'yellow',
      }}
    />
  </View>
);
export default ShadowDemo2;
