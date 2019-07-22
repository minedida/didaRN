import { createStackNavigator  } from 'react-navigation';
import AppTabBar from './AppTabBar';
import AddTodo from "../containers/drawer/AddTodo";
import InboxTodo from "../containers/drawer/InboxTodo";
import ManageTodo from "../containers/drawer/ManageTodo";
import TodayTodo from "../containers/drawer/TodayTodo";
import Auth from "../containers/auth/Auth";
import MailAuth from "../containers/auth/MailAuth";
import SettingTab from "../containers/setting/SettingTab";
import Webview from "../containers/webview/Webview";
import { paramsToProps } from "./utils";
import Dashboard from "../containers/setting/Dashboard";
import SoundAndNotify from "../containers/setting/SoundAndNotify";
import AddTaskInstantly from "../containers/setting/AddTaskInstantly";
import IntelligentRecognition from "../containers/setting/IntelligentRecognition";
import MoreSetting from "../containers/setting/MoreSetting";
import ThemeSetting from "../containers/setting/ThemeSetting";
import TransitionConfig from './TransitionConfig'
import { Platform } from "react-native";

const transitionConfig: any = Platform.OS === 'ios' ? undefined : TransitionConfig

export default createStackNavigator(
  {
    AppTabBar,
    AddTodo,
    InboxTodo,
    ManageTodo,
    TodayTodo,
    Auth,
    MailAuth,
    SettingTab,
    Webview: paramsToProps(Webview),
    Dashboard,
    SoundAndNotify,
    AddTaskInstantly,
    IntelligentRecognition,
    MoreSetting,
    ThemeSetting,
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppTabBar',
    mode: 'card',
    navigationOptions: {
      gesturesEnabled: true,
    },
    transitionConfig: transitionConfig
  }
);
