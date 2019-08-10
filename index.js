import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import Demo from './demo/Demo'
import {name as appName} from './app.json';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  }
}

const ignores = [
  // 消除AppTabBarNav.tsx组件中引入新的navigator带来的⚠️
  'You should only render one navigator explicitly in your app',
  // @community/async-storage v2 is under developer
  'Async Storage has been extracted from react-native core and will be removed in a future release',
  // 消除debug带来的⚠️
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
  // 循环引用，在component/下的某个组件中用到了同目录下的其他组件(从index.ts)，导致循环引用
  'Require cycle',
  'NetInfo has been extracted from react-native core and will be removed in a future release'
]
YellowBox.ignoreWarnings(ignores)
// todo async-storage、NetInfo


AppRegistry.registerComponent(appName, () => App);
