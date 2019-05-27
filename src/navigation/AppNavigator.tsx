import { createSwitchNavigator } from 'react-navigation';
import Splash from '../containers/Splash';
import AppStackNav from './AppStackNav';
import AuthStackNav from './AuthStackNav';
import { addBackHandler } from "../helper/hoc/addBackHandler";

export default createSwitchNavigator(
  {
    Auth: addBackHandler(AuthStackNav, 'Auth'),
    App: addBackHandler(AppStackNav, 'App'),
    Splash,
  },
  {
    initialRouteName: 'Splash',
  },
);
