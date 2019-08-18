/*
import React from 'react'
import { createBottomTabNavigator, NavigationContainer } from 'react-navigation';
import { AppStore } from '../store/AppStore'
import { inject, observer } from "mobx-react";
import { onNavigationStateChange } from "./utils";

const tabBarOptions = {
  safeAreaInset: { bottom: 'always', top: 'never' },
  activeTintColor: '#6680d7',
  inactiveTintColor: '#a3a3a3',
  tabStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  showLabel: false,
  showIcon: true,
  style: { backgroundColor: '#fff' },
  lazy: true,
  animationEnabled: false,
  swipeEnabled: false,
  backBehavior: 'none',
} as any

@inject('app')
@observer
class AppTabBarNav extends React.Component<{ app: AppStore }> {

  render() {
    const Tab: NavigationContainer = createBottomTabNavigator(
      this.props.app.tabMap,
      {
        tabBarOptions: {
          ...tabBarOptions,
          // dynamic change tab activeTintColor
          activeTintColor: this.props.app.appTheme.colors.primary
        },
        // initialRouteName: 'SettingTab',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        backBehavior: 'none',
      },
    );
    return <Tab onNavigationStateChange={onNavigationStateChange}/>
  }
}
export default AppTabBarNav
*/
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import { inject, observer } from "mobx-react";
import _ from 'lodash';
import { BottomTabBar } from 'react-navigation-tabs';
import SettingTab from '../containers/setting/SettingTab';
import CalendarTab from "../containers/calendar/CalendarTab";
import TodoTab from "../containers/todo/TodoTab";
import { app } from "../store/AppStore";

const tabBarOptions = {
  safeAreaInset: { bottom: 'always', top: 'never' },
  activeTintColor: '#6680d7',
  inactiveTintColor: '#a3a3a3',
  tabStyle: {
    backgroundColor: '#ffffff',
    alignItems:'center',
    justifyContent: 'center'
  },
  showLabel: false,
  showIcon: true,
  style: { backgroundColor: '#fff' },
  lazy: true,
  animationEnabled: false,
  swipeEnabled: false,
  backBehavior: 'none',
} as any

const routeConfigMap = {
  TodoMain: TodoTab,
  CalendarMain: CalendarTab,
  SettingMain: SettingTab,
} as any

const originalRoutes = [
  { key: '首页', routeName: '首页', params: undefined },
  { key: '商品推荐', routeName: '商品推荐', params: undefined },
  { key: '我的', routeName: '我的', params: undefined }
];


// @inject('app')
@observer
class CustomBottomTabBar extends React.Component<any>{
  calculateNavigation(navigation) {
    const { routes, index } = navigation.state;

    console.log(routes)
    console.log(app.tabRoutes)
    // return navigation;
    return {
      state: {
        index: 0,
        routes: app.tabRoutes
      }
    }

  }
  render() {
    const customNavigation = this.calculateNavigation(this.props.navigation)
    return <BottomTabBar {...this.props} navigation={customNavigation}/>;
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  // routeConfigMap,
  app.tabMap,
  {
    tabBarOptions,
    // initialRouteName: 'SettingMain',
    tabBarComponent: CustomBottomTabBar
  },
);

export default bottomTabNavigator;

// 动态化参考： https://juejin.im/post/5cff4f516fb9a07ea803c0f5
