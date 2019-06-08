import { createSwitchNavigator } from 'react-navigation';
import Splash from '../containers/Splash';
import AppStackNav from './AppStackNav';
// import AuthStackNav from './AuthStackNav';
import { addBackHandler } from "../helper/hoc";

export default createSwitchNavigator(
  {
    // auth: addBackHandler(AuthStackNav, 'auth'),
    App: addBackHandler(AppStackNav, 'App'),
    Splash,
  },
  {
    initialRouteName: 'Splash',
  },
);
