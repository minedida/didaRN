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
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { observer } from "mobx-react";
import { BottomTabBar } from 'react-navigation-tabs';
import { app } from "../store/AppStore";

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
  style: {
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: '#fff',
        // 去除bottom-tab的那条线，替换成阴影
        borderTopWidth: 0,
        elevation: 14,
      }
    }),
  },
  lazy: true,
  animationEnabled: false,
  swipeEnabled: false,
  backBehavior: 'none',

} as any;


@observer
class CustomBottomTabBar extends React.Component<any>{
  calculateNavigation(navigation) {
    // @ts-ignore
    const { routes } = navigation.state;

    // return navigation;
    return {
      state: {
        // index: 0,
        ...navigation.state,
        routes: app.tabRoutes
      }
    }
  }
  render() {
    console.log('CustomBottomTabBar-this.props', this.props)
    const style = {
      activeTintColor: app.appTheme.colors.primary,
    };
    const customNavigation = this.calculateNavigation(this.props.navigation)
    return <BottomTabBar {...this.props} navigation={customNavigation} {...style} />;
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  app.tabMap,
  {
    tabBarOptions,
    // initialRouteName: 'SettingTab',
    initialRouteName: 'TodoTab',
    tabBarComponent: CustomBottomTabBar
  },
);

export default bottomTabNavigator;

// 动态化参考： https://juejin.im/post/5cff4f516fb9a07ea803c0f5
