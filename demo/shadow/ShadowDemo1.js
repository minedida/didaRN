import React from 'react';
import { View, Text } from 'react-native';
import ShadowView from './react-native-shadow-view';

const ShadowDemo1 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ShadowView
      style={{
        borderRadius: 30,
        backgroundColor: '#ffffff',
        shadowColor: '#4563cd',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 14,
        shadowOpacity: 0.14,
        width: 294,
        height: 60,
      }}
    >
    </ShadowView>
  </View>
);

export default ShadowDemo1;
