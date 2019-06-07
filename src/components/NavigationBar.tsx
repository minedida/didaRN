import React, { PureComponent } from 'react'
import { View, Text, Platform, StatusBar, StyleSheet, TouchableNativeFeedback, StyleProp, ViewStyle } from 'react-native'
import { d, t } from "../helper/utils/ScreenUtil";
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { goBack } from "../navigation";
import DeviceConstants from "../helper/constant/DeviceConstants";
import { ButtonContainer } from "./";
import { material } from 'react-native-typography'

const isAndroid = Platform.OS === 'android'

const NAV_BAR_HEIGHT_IOS = d(44)
const NAV_BAR_HEIGHT_ANDROID = d(50)
const {status_bar_height, fake_status_bar_padding_for_ios, fake_status_bar_height_for_android} = DeviceConstants

interface Props {
  title?: string,
  statusBarStyle?: 'light-content' | 'default',
  navBarBackgroundColor?: string, // nav背景色
  navBarContentColor?: string, // nav中内容的颜色
  statusBarHidden?: boolean,
  backBtnColor?: string,
  titleView?: JSX.Element,
  rightButton?: JSX.Element,
  leftButton?: JSX.Element,
  style?: StyleProp<ViewStyle>
  onBackPress?: (e) => void
}


const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: NAV_BAR_HEIGHT_IOS + status_bar_height,
      },
      android: {
        height: NAV_BAR_HEIGHT_ANDROID + status_bar_height
      }
    })
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: isAndroid ? 'flex-start' : 'center',
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

class NavigationBar extends PureComponent<Props> {
  static defaultProps = {
    title: '标题',
    statusBarStyle: 'default',
    statusBarHidden: false,
    navBarBackgroundColor: '#fff',
    navBarContentColor: '#333',
    backBtnColor: '#62646c'
  }

  private getRightBotton(rightView: any) {
    return (
      <View style={[styles.center, { height: '100%', position: 'absolute', right: d(12) }]}>
        {rightView && rightView}
      </View>
    )
  }

  private getLeftButton(leftButton: any) {
    return (
      <View style={[styles.center, { height: '100%', position: 'absolute', left: d(10) }]}>
        {
          leftButton !== undefined ? leftButton :
            <ButtonContainer
              style={{  width: d(44), justifyContent: 'center', alignItems: 'center' }}
              onPress={this.props.onBackPress ? this.props.onBackPress : goBack}
              background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
              {
                isAndroid ? <FeatherIcon color={this.props.navBarContentColor} name={'arrow-left'} size={24}/> :
                <IoniconsIcon color={this.props.navBarContentColor} name={'ios-arrow-back'} size={26}/>
              }
            </ButtonContainer>
        }
      </View>
    )
  }

  getTitleView(title: any) {
    const { titleView, leftButton } = this.props
    const paddingLeft = isAndroid ? (
      leftButton === null ? d(15) : d(72)
    ) : 0
    return (
      <View style={{paddingLeft}}>
        {
          !title ? titleView :
            <Text
              style={[material.titleObject]}
              numberOfLines={1}
              allowFontScaling={false}>{title}</Text>
        }
      </View>
    )
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
        <View style={{ height: fake_status_bar_height_for_android, width: '100%', paddingTop: fake_status_bar_padding_for_ios }}/>
        {content}
      </View>
    )
  }
}

export default NavigationBar