import { createSwitchNavigator } from 'react-navigation';
import Splash from '../containers/Splash';
import AppStackNav from './AppStackNav';
import AuthStackNav from './AuthStackNav';

export default createSwitchNavigator(
  {
    Auth: AuthStackNav,
    App: AppStackNav,
    Splash,
  },
  {
    initialRouteName: 'Splash',
  },
);
