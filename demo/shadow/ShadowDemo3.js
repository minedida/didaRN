import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import ShadowView from 'react-native-simple-shadow-view'
import {Space} from "../../src/components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    letterSpacing: 0.24,
  },
  square: {
    width: 294,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
  },
  shadow: {
    shadowColor: '#4563cd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 14,
    shadowOpacity: 0.14,
  }
})

const ShadowInput = () => (
  <ShadowView
    style={[styles.square, styles.shadow]}
  >
    <TextInput
      editable={true}
      autoFocus={true}
      selectionColor={'#4563cd'}
      keyboardType={'numeric'}
      style={styles.inputStyle}
      placeholderTextColor={'#909399'}
      underlineColorAndroid="transparent"
      maxLength={100}
      defaultValue={'phone'}
      placeholder={'placeholder'}
    />
  </ShadowView>
)

class ShadowDemo3 extends React.Component {

  render() {
    return (
      <View
        style={styles.container}
      >
        <Space height={60} />
        <ShadowInput />
        <View style={[styles.square, { backgroundColor: 'yellow' }]} />
      </View>
    );
  }
}

export default ShadowDemo3;
