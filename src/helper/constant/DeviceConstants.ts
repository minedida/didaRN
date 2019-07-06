import ExtraDimensions from 'react-native-extra-dimensions-android';
import { Platform, Dimensions } from 'react-native'
import { d, isIphoneX } from "../utils/ScreenUtil";

const { height, width } = Dimensions.get('window')
const isAndroid = Platform.OS === 'android'
const isIOS = Platform.OS === 'ios'
const DeviceConstants = {
  DeviceHeight: isAndroid ? ExtraDimensions.get('REAL_WINDOW_HEIGHT') : height,
  DeviceWidth: isAndroid ? ExtraDimensions.get('REAL_WINDOW_WIDTH') : width ,
  status_bar_height: isAndroid ? ExtraDimensions.get('STATUS_BAR_HEIGHT') : (
    isIphoneX() ? d(44) : d(20)
  ),
  soft_menu_bar_height: isAndroid ? ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT') : 0,
  smart_bar_height: isAndroid ? ExtraDimensions.get('SMART_BAR_HEIGHT') : 0,
  bottom_bar_height: isIphoneX() ? d(34) : 0,
  fake_status_bar_height_for_android: isAndroid ? ExtraDimensions.get('STATUS_BAR_HEIGHT') : 0,
  fake_status_bar_padding_for_ios: isIOS ? ( isIphoneX() ? d(44) : d(20)) : 0,
}

export default DeviceConstants
