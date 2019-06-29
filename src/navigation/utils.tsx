import React, { Component } from 'react'
import { NavigationParams, NavigationRoute, NavigationScreenProp } from "react-navigation";
import stores from '../store'
import { Toast } from "../components";

/**
 * Make the navigation state params "this.props.navigation.state.params.<x>" become a component props
 * @param ScreenComponent Page component
 */
const paramsToProps = (ScreenComponent: any) =>
  class extends Component<any> {
    static navigationOptions = ScreenComponent.navigationOptions

    render() {
      const { params } = this.props.navigation.state;
      return <ScreenComponent {...this.props} {...params} />
    }
  }


type NavigationPops =
  NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>


// gets the current screen from navigation state
// @ts-ignore
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

function onNavigationStateChange(prevState: any, currentState: any) {
  const currentScreen = getActiveRouteName(currentState);
  const prevScreen = getActiveRouteName(prevState);
  // 本项目中，由于使用了动态Tab，顶级的`onNavigationStateChange`在TabBar中被切断。
  // 为妥协动态Tab的需求，将两个NavigationContainer的`onNavigationStateChange`回调均指向改方法。
  // 实测，只需要将`AppTabBar`和`TodoTab`视作同一路由即可校正该妥协带来的副作用，可以达到预期效果。
  Toast.show(currentScreen)
  if (prevScreen !== currentScreen) {
    stores.drawer.disableGestures = 'TodoTab' !== currentScreen;
  }
}


export {
  paramsToProps,
  NavigationPops,
  onNavigationStateChange,
  getActiveRouteName
}
