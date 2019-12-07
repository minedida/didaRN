import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'

import styles from './Styles'

export default class TopBarMisc extends Component {
  static navigationItem = {
    titleItem: {
      title: 'TopBar Options',
    },
  }

  constructor(props) {
    super(props)
    this.topBarTitleView = this.topBarTitleView.bind(this)
    this.topBarHidden = this.topBarHidden.bind(this)
    this.topBarColor = this.topBarColor.bind(this)
    this.topBarAlpha = this.topBarAlpha.bind(this)
    this.noninteractive = this.noninteractive.bind(this)
    this.topBarShadowHidden = this.topBarShadowHidden.bind(this)
    this.statusBarColor = this.statusBarColor.bind(this)
    this.topBarStyle = this.topBarStyle.bind(this)
    this.statusBarHidden = this.statusBarHidden.bind(this)
  }

  noninteractive() {
    this.props.navigator.push('Noninteractive')
  }

  topBarShadowHidden() {
    this.props.navigator.push('TopBarShadowHidden')
  }

  topBarHidden() {
    this.props.navigator.push('TopBarHidden')
  }

  topBarColor() {
    this.props.navigator.push('TopBarColor')
  }

  topBarAlpha() {
    this.props.navigator.push('TopBarAlpha')
  }

  topBarTitleView() {
    this.props.navigator.push('TopBarTitleView')
  }

  statusBarColor() {
    this.props.navigator.push('StatusBarColor')
  }

  statusBarHidden() {
    this.props.navigator.push('StatusBarHidden')
  }

  topBarStyle() {
    this.props.navigator.push('TopBarStyle')
  }

  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="never"
        automaticallyAdjustContentInsets={true}
        contentInset={{ top: 0, left: 0, bottom: 0, right: 0 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>About TopBar</Text>
          <TouchableOpacity
            onPress={this.topBarShadowHidden}
            activeOpacity={0.2}
            style={styles.button}>
            <Text style={styles.buttonText}>TopBarShadowHidden</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.topBarHidden} activeOpacity={0.2} style={styles.button}>
            <Text style={styles.buttonText}>TopBarHidden</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.topBarColor} activeOpacity={0.2} style={styles.button}>
            <Text style={styles.buttonText}>TopBarColor</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.topBarAlpha} activeOpacity={0.2} style={styles.button}>
            <Text style={styles.buttonText}>TopBarAlpha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.topBarTitleView}
            activeOpacity={0.2}
            style={styles.button}>
            <Text style={styles.buttonText}>TopBarTitleView</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.noninteractive} activeOpacity={0.2} style={styles.button}>
            <Text style={styles.buttonText}>Noninteractive</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.statusBarColor} activeOpacity={0.2} style={styles.button}>
            <Text style={styles.buttonText}>StatusBarColor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.statusBarHidden}
            activeOpacity={0.2}
            style={styles.button}>
            <Text style={styles.buttonText}>StatusBarHidden</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.topBarStyle} activeOpacity={0.2} style={styles.button}>
            <Text style={styles.buttonText}>TopBarStyle</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
