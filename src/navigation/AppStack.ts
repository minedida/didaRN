import { createStackNavigator } from 'react-navigation';
import AppTabBar from './AppTabBar';
import User from "../containers/setting/User";
import AddTodo from "../containers/drawer/AddTodo";
import InboxTodo from "../containers/drawer/InboxTodo";
import ManageTodo from "../containers/drawer/ManageTodo";
import TodayTodo from "../containers/drawer/TodayTodo";
import Auth from "../containers/auth/Auth";
import MailAuth from "../containers/auth/MailAuth";
import SettingTab from "../containers/setting/SettingTab";
import Webview from "../containers/webview/Webview";
import { paramsToProps } from "./utils";

export default createStackNavigator(
  {
    AppTabBar,
    User,
    AddTodo,
    InboxTodo,
    ManageTodo,
    TodayTodo,
    Auth,
    MailAuth,
    SettingTab,
    Webview: paramsToProps(Webview),
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppTabBar',
    cardStyle: {
      shadowColor: 'transparent',
    },
  },
);
