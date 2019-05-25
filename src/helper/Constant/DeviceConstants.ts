import ExtraDimensions from 'react-native-extra-dimensions-android';
import { Platform, Dimensions } from 'react-native'
import { d, isIphoneX } from "../utils/ScreenUtil";

const { height, width } = Dimensions.get('window')
const DeviceConstants = {
  DeviceHeight: Platform.OS === 'ios' ? height : ExtraDimensions.get('REAL_WINDOW_HEIGHT'),
  DeviceWidth: Platform.OS === 'ios' ? width : ExtraDimensions.get('REAL_WINDOW_WIDTH'),
  status_bar_height: Platform.OS === 'ios' ? 0
    : ExtraDimensions.get('STATUS_BAR_HEIGHT'),
  soft_menu_bar_height: Platform.OS === 'ios' ? 0 : ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'),
  smart_bar_height: Platform.OS === 'ios' ? 0 : ExtraDimensions.get('SMART_BAR_HEIGHT'),
  bottom_bar_height: isIphoneX() ? d(34) : 0
}

export default DeviceConstants
