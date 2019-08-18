import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { NavigationContainerComponent } from 'react-navigation';
import AppStack from './AppStack';
import { setNavigator } from './';

@observer
class AppStackNav extends Component<any> {
  static router = AppStack.router;

  render() {
    return <AppStack {...this.props} />
  }
}

export default AppStackNav
