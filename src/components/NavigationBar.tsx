import React, { PureComponent } from 'react'
import { View, Text, Platform, StatusBar, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { d, isIphoneX, t } from "../helper/utils/ScreenUtil";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { goBack } from "../navigation";
import DeviceConstants from "../helper/Constant/DeviceConstants";
import ButtonContainer from "./ButtonContainer/";

const isAndroid = Platform.OS === 'android'

const NAV_BAR_HEIGHT_IOS = d(44)
const NAV_BAR_HEIGHT_ANDROID = d(50)
const STATUS_BAR_HEIGHT = DeviceConstants.status_bar_height

interface Props {
  title?: string,
  statusBarStyle?: 'light-content' | 'default',
  navBarBackgroundColor?: string, // nav背景色
  navBarContentColor?: string, // nav中内容的颜色
  statusBarHidden?: boolean,
  backBtnColor?: string,
  titleView?: JSX.Element,
  rightButton?: JSX.Element,
  leftButton?: any,
  style?: any
}

interface State {
  title: string,
  hide: boolean
}


const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: isIphoneX() ? d(44) : d(20),
        height: isIphoneX() ? NAV_BAR_HEIGHT_IOS + d(44) : NAV_BAR_HEIGHT_IOS + d(20),
      },
      android: {
        height: NAV_BAR_HEIGHT_ANDROID + STATUS_BAR_HEIGHT
      }
    })
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: isAndroid ? NAV_BAR_HEIGHT_ANDROID : NAV_BAR_HEIGHT_IOS
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginLeft: d(60),
    marginRight: d(60),
    fontSize: t(18),
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#333'
  }
})

class NavigationBar extends PureComponent<Props, State> {
  static defaultProps = {
    title: '标题',
    statusBarStyle: 'default',
    statusBarHidden: false,
    navBarBackgroundColor: '#4a65c6',
    navBarContentColor: '#333',
    backBtnColor: '#62646c'
  }

  private getRightBotton(rightView: any) {
    return (
      rightView ? rightView :
        <View/>
    )
  }

  private getLeftButton(leftButton: any) {
    return (
      <View style={[styles.center, { height: '100%', width: d(44), position: 'absolute', left: d(12) }]}>
        {
          leftButton !== undefined ? leftButton :
            <ButtonContainer
              onPress={goBack}
              background={TouchableNativeFeedback.SelectableBackgroundBorderless()} >
              <FeatherIcon
                color={this.props.navBarContentColor}
                name={isAndroid ? 'arrow-left' : 'chevron-left'}
                size={isAndroid ? t(20) : t(26)}/>
            </ButtonContainer>
        }
      </View>
    )
  }

  getTitleView(title: any) {
    const { titleView, navBarContentColor } = this.props
    return !title ? titleView :
      <Text
        numberOfLines={1}
        allowFontScaling={false}
        style={[styles.title, { color: navBarContentColor }]}>{title}</Text>
  }

  render() {
    const {
      title, navBarBackgroundColor,
      rightButton, leftButton,
      statusBarStyle, statusBarHidden
    } = this.props
    const content = (
      <View style={[styles.navBar]}>
        {this.getTitleView(title)}
        {this.getLeftButton(leftButton)}
        {this.getRightBotton(rightButton)}
      </View>
    )

    return (
      <View style={[styles.container, { backgroundColor: navBarBackgroundColor }, this.props.style]}>
        <StatusBar barStyle={statusBarStyle} hidden={statusBarHidden}
                   animated={true} backgroundColor="transparent" translucent/>
        <View style={{ height: STATUS_BAR_HEIGHT, width: '100%' }}/>
        {content}
      </View>
    )
  }
}

export default NavigationBar
