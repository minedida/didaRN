import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native'
import TextBadge from './Badge'

export default class CustomTabBar extends Component {
  constructor(props) {
    super(props)
  }

  handleTabClick(index) {
    if (index == -1) {
      this.props.navigator.present('Result', 1)
    } else {
      this.props.navigator.switchTab(index)
    }
  }

  shouldComponentUpdate(next) {
    console.info(next)
    return true
  }

  componentDidMount() {
    console.info('CustomTabBar componentDidMount')
  }

  onComponentResult(requestCode, resultCode, data) {
    console.info('CustomTabBar onComponentResult')
  }

  render() {
    const { itemColor, unselectedItemColor, selectedIndex, badgeColor } = this.props
    const style = {
      textBadgeStyle: { backgroundColor: badgeColor },
      dotBadgeStyle: { backgroundColor: badgeColor },
      unselectedItemColor,
      itemColor,
    }

    return (
      <View style={styles.tabBar}>
        <Tab
          onTabClick={() => this.handleTabClick(0)}
          {...this.props.tabs[0]}
          selected={selectedIndex === 0}
          {...style}
        />
        <Add onTabClick={() => this.handleTabClick(-1)} />
        <Tab
          onTabClick={() => this.handleTabClick(1)}
          {...this.props.tabs[1]}
          selected={selectedIndex === 1}
          {...style}
        />
      </View>
    )
  }
}

function Add(props) {
  return (
    <TouchableOpacity onPress={props.onTabClick} activeOpacity={0.8} style={styles.tab}>
      <Image source={require('./images/tabbar_add_blue.png')} fadeDuration={0} />
    </TouchableOpacity>
  )
}

function Tab(props) {
  const {
    onTabClick,
    icon,
    title,
    selected,
    itemColor,
    unselectedItemColor,
    badgeText,
    textBadgeStyle,
    dot,
    dotBadgeStyle,
  } = props
  return (
    <TouchableOpacity onPress={onTabClick} activeOpacity={0.8} style={styles.tab}>
      {icon ? (
        <Image
          source={{
            uri: icon,
            width: 24,
            height: 24,
            scale: PixelRatio.get(),
          }}
          style={{ tintColor: selected ? itemColor : unselectedItemColor }}
          resizeMode="center"
          fadeDuration={0}
        />
      ) : (
        <View style={{ width: 24, height: 24 }} />
      )}
      <Text
        style={
          selected
            ? [styles.buttonTextSelected, { color: itemColor }]
            : [styles.buttonText, { color: unselectedItemColor }]
        }>
        {title}
      </Text>
      {badgeText && <TextBadge style={[styles.textBadge, textBadgeStyle]}>{badgeText}</TextBadge>}
      {dot && <DotBadge style={dotBadgeStyle} />}
    </TouchableOpacity>
  )
}

function DotBadge(props) {
  return <View style={[styles.dotBadge, props.style]} />
}

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'android' ? 56 : 48,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 12,
  },
  buttonTextSelected: {
    backgroundColor: 'transparent',
    fontSize: 12,
  },
  textBadge: {
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    marginBottom: 6,
    marginLeft: 6,
  },
  dotBadge: {
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    marginBottom: 10,
    marginLeft: 10,
    height: 12,
    width: 12,
    borderWidth: 1,
    borderColor: '#fefefe',
    borderRadius: 14 / 2,
    backgroundColor: 'rgb(0, 122, 255)',
  },
})
