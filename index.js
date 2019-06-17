import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// 消除AppTabBarNav.tsx组件中引入新的navigator带来的警告
YellowBox.ignoreWarnings(['You should only render one navigator explicitly in your app'])

AppRegistry.registerComponent(appName, () => App);
