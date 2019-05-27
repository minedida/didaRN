import { createStackNavigator } from 'react-navigation';
import AppTabBar from './AppTabBar';
import User from "../containers/Setting/User";

export default createStackNavigator(
  {
    AppTabBar,
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
