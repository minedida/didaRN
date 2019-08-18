import React from 'react'
import { createAppContainer, NavigationContainerComponent } from 'react-navigation'
import { onNavigationStateChange } from "./utils";
import AppNavigator from "./AppNavigator";
import { observer } from "mobx-react";
import { withDrawer } from "../helper/hoc";
import { setNavigator } from "./index";


// @observer
// @withDrawer
// class AppNavigatorCmp extends React.Component {
//   render() {
//     return <AppNavigator onNavigationStateChange={onNavigationStateChange}/>
//   }
// }

@observer
class Route extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppNavigator as any)
    return (
      <AppContainer
        onNavigationStateChange={onNavigationStateChange}
        ref={(nav: NavigationContainerComponent) => setNavigator(nav)}/>
    )
  }
}

export default Route
