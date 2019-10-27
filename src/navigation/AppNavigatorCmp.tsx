import React from 'react'
import { observer } from "mobx-react";
import { createAppContainer, NavigationContainerComponent } from 'react-navigation'
import { onNavigationStateChange } from "./utils";
import AppNavigator from "./AppNavigator";
import { setNavigator } from "./index";


// @observer
// @withDrawer
// class AppNavigatorCmp extends React.Component {
//   render() {
//     return <AppNavigator onNavigationStateChange={onNavigationStateChange}/>
//   }
// }

@observer
// @withDrawer
class Route extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppNavigator as any)
    return (
      <AppContainer
        onNavigationStateChange={onNavigationStateChange}
        ref={(nav: NavigationContainerComponent) => {
          setNavigator(nav)
        }}/>
    )
  }
}

// tab动态化，最终还是要等待官方解决，已经正在进行中了：https://github.com/react-navigation/react-navigation/issues/5542
// 如果非要自己解决这个问题：目前应该着手于customnavigator：https://reactnavigation.org/docs/zh-Hans/3.x/custom-navigators.html

export default Route
