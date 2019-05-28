import { createStackNavigator } from 'react-navigation';
import AppTabBar from './AppTabBar';
import User from "../containers/Setting/User";
import AddTodo from "../containers/Drawer/AddTodo";
import InboxTodo from "../containers/Drawer/InboxTodo";
import ManageTodo from "../containers/Drawer/ManageTodo";
import TodayTodo from "../containers/Drawer/TodayTodo";

export default createStackNavigator(
  {
    AppTabBar,
    User,
    AddTodo,
    InboxTodo,
    ManageTodo,
    TodayTodo
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppTabBar',
    cardStyle: {
      shadowColor: 'transparent',
    },
  },
);
