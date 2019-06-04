import { createStackNavigator } from 'react-navigation';
import Auth from "../containers/Auth/Auth";
import MailAuth from "../containers/Auth/MailAuth";

export default createStackNavigator(
  {
    Auth: Auth,
    MailAuth,
  },
  {
    // initialRouteName: 'MailAuth',
    headerMode: 'none',
    cardStyle: {
      shadowColor: 'transparent',
    },
  },
);
