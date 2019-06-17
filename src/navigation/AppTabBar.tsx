import React from 'react'
import { createBottomTabNavigator, NavigationContainer } from 'react-navigation';
import { AppStore } from '../store/AppStore'
import { inject, observer } from "mobx-react";

const tabBarOptions = {
  safeAreaInset: { bottom: 'never', top: 'never' },
  activeTintColor: '#6680d7',
  inactiveTintColor: '#a3a3a3',
  tabStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  showLabel: false,
  showIcon: true
} as any

function getRouteConfigMap(tabs) {
  return tabs.reduce((p, c) => {
    if (c.show === true) {
      // get injected component by mobx displayName
      if (c.cmp.displayName.indexOf('inject') > -1) {
        const displayName = c.cmp.displayName.split('-')[1]
        p[displayName] = c.cmp;
      } else {
        // get a plain Component displayName
        p[c.cmp.displayName] = c.cmp;
      }
    }
    return p;
  }, {})
}

@inject('app')
@observer
export default class AppTabBarNav extends React.Component<{ app: AppStore }> {


  render() {
    const RouteConfigMap = getRouteConfigMap(this.props.app.appTabs)

    const Tab: NavigationContainer = createBottomTabNavigator(
      RouteConfigMap,
      {
        tabBarOptions,
        // initialRouteName: 'SettingTab',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        backBehavior: 'none',
      },
    );
    return <Tab/>
  }
}
