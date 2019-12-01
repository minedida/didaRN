import {AppRegistry, YellowBox} from 'react-native';
// https://github.com/kmagiera/react-native-gesture-handler/issues/320
import 'react-native-gesture-handler'

import App from './App';
// import App from './src/App';
// import App from './demo/'
import {name as appName} from './app.json';

if (!__DEV__) {
  // 在升级RN060后，下面这行代码在android-release包中会出现问题，暂时不知道为什么
  // global.console = {
  //   info: () => {},
  //   log: () => {},
  //   warn: () => {},
  //   debug: () => {},
  //   error: () => {}
  // }
}

const ignores = [
  // 消除AppTabBarNav.tsx组件中引入新的navigator带来的⚠️
  'You should only render one navigator explicitly in your app',
  // @community/async-storage v2 is under developer
  'AsyncStorage has been extracted from react-native core',
  // 消除debug带来的⚠️
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
  // 循环引用，在component/下的某个组件中用到了同目录下的其他组件(从index.ts)，导致循环引用
  'Require cycle',
  'NetInfo has been extracted from react-native core and will be removed in a future release',
  // Reactotron 带来的⚠️，暂时忽略
  'Error: INVALID_STATE_ERR',
  '`-[RCTRootView cancelTouches]` is deprecated and will be deleted soon.',
]
YellowBox.ignoreWarnings(ignores)
// todo async-storage、NetInfo
// console.disableYellowBox = true;


AppRegistry.registerComponent(appName, () => App);
