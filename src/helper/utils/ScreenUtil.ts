/**
 * React Native 适配工具类
 * 以iPhone6为基准
 */

import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

// iPhone6 尺寸
const defaultDevice = {
  width: 375,
  height: 667
}

const fontScale = PixelRatio.getFontScale();
const scale = deviceWidth / defaultDevice.width;

const ScaleText = (size: any) =>
  Math.round(size * scale * fontScale)

const ScaleSize = (size: any) =>
  Math.round(size * scale)

const isIphoneX=() =>
  Platform.OS === 'ios' &&
  ((deviceHeight === 812 || deviceWidth === 812) || (deviceHeight === 896 || deviceWidth === 896))

/**
 * StatusBar高度大于28及表示为全面屏
 */
function isNotch() {
  return Platform.OS === 'android' && StatusBar.currentHeight && StatusBar.currentHeight > 28
}

export {
  ScaleSize as d,
  ScaleText as t,
  isIphoneX,
  isNotch
}
