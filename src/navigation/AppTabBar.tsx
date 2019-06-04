import { createBottomTabNavigator } from 'react-navigation';
import SettingTab from '../containers/Setting/SettingTab';
import CalendarTab from "../containers/Calendar/CalendarTab";
import TodoTab from "../containers/Todo/TodoTab";

const tabBarOptions = {
  safeAreaInset: { bottom: 'never', top: 'never' },
  activeTintColor: '#6680d7',
  inactiveTintColor: '#a3a3a3',
  tabStyle: {
    backgroundColor: '#ffffff',
    alignItems:'center',
    justifyContent: 'center'
  },
  showLabel: false,
  showIcon: true
} as any

const routeConfigMap = {
  TodoMain: TodoTab,
  CalendarMain: CalendarTab,
  SettingMain: SettingTab,
} as any

export default createBottomTabNavigator(
  routeConfigMap,
  {
    tabBarOptions,
    // initialRouteName: 'SettingMain',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
  },
);
