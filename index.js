import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import Demo from './demo/Demo'
import {name as appName} from './app.json';


const ignores = [
  // 消除AppTabBarNav.tsx组件中引入新的navigator带来的⚠️
  'You should only render one navigator explicitly in your app',
  // @community/async-storage v2 is under developer
  'Async Storage has been extracted from react-native core and will be removed in a future release',
  // 消除debug带来的⚠️
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).'
]
YellowBox.ignoreWarnings(ignores)


AppRegistry.registerComponent(appName, () => Demo);
