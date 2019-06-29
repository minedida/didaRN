import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import Demo from './demo/Demo'
import {name as appName} from './app.json';


const ignores = [
  // 消除AppTabBarNav.tsx组件中引入新的navigator带来的警告
  'You should only render one navigator explicitly in your app',
  // @community/async-storage v2 is under developer
  'Async Storage has been extracted from react-native core and will be removed in a future release'
]
YellowBox.ignoreWarnings(ignores)



AppRegistry.registerComponent(appName, () => App);
