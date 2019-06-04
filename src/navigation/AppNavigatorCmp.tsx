import React from 'react'
import { onNavigationStateChange } from "./utils";
import AppNavigator from "./AppNavigator";
import { observer } from "mobx-react";
import { addDrawer } from "../helper/hoc";


@observer
@addDrawer
class AppNavigatorCmp extends React.Component{
  render() {
    return <AppNavigator onNavigationStateChange={onNavigationStateChange}/>
  }
}

export default AppNavigatorCmp
