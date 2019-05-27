import { createStackNavigator } from 'react-navigation';
import Settings from '../containers/User/Setting';
import AppTabBar from './AppTabBar';
import User from "../containers/User/User";

export default createStackNavigator(
  {
    AppTabBar,
    Settings,
    User,
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppTabBar',
    cardStyle: {
      shadowColor: 'transparent',
    },
  },
);
