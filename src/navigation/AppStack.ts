import { createStackNavigator } from 'react-navigation';
import Settings from '../containers/User/Setting';
import AppTabBar from './AppTabBar';

export default createStackNavigator(
  {
    AppTabBar,
    Settings,
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppTabBar',
    cardStyle: {
      shadowColor: 'transparent',
    },
  },
);
