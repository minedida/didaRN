import { createBottomTabNavigator } from 'react-navigation';
import Settings from '../containers/Setting/Setting';
import Calendar from "../containers/Calendar/Calendar";
import Todo from "../containers/Todo/Todo";

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
  TodoMain: Todo,
  CalendarMain: Calendar,
  SettingMain: Settings,
} as any

export default createBottomTabNavigator(
  routeConfigMap,
  {
    tabBarOptions,
    initialRouteName: 'TodoMain',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
  },
);
