import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { d, isIphoneX } from "../helper/utils/ScreenUtil";

type Props = {
  topColor?: string,
  bottomColor?: string
}
export default class SafeAreaView extends Component<Props> {

  static defaultProps = {
    topColor: '#fff',
    bottomColor: '#fff',
  }
  getBottomArea() {
    return isIphoneX() &&
      <View style={[styles.bottomArea, { backgroundColor: this.props.bottomColor }]}/>
  }
  render() {
    return <View style={[styles.container]}>
      {this.props.children}
      {this.getBottomArea()}
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topArea: {
    height: d(44),
  },
  bottomArea: {
    height: d(34),
  },
})
