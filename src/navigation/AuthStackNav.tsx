import { observer } from 'mobx-react/native';
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainerComponent } from 'react-navigation';
import AuthStack from './AuthStack';
import { getCurrentRouteName, setNavigator } from './';

// @injectStores('ui')
@observer
export default class AuthStackNav extends Component<any> {
  static router = AuthStack.router;
  isTransitioning: boolean = false;
  lastBackPressed: number = 0;

  componentDidMount() {
    // if (Platform.OS === 'android') {
    //   BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    // }
  }

  componentWillUnmount() {
    // if (Platform.OS === 'android') {
    //   BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    // }
  }

  onBackAndroid = () => {
    /*const { ui } = this.props;*/
    const currentScreen = getCurrentRouteName();

    /*if (ui.isLoading || this.isTransitioning) {
      // wait loading finished
      return true;
    }*/

    if (currentScreen !== 'Login') {
      // pop view
      return false;
    }

    if (this.lastBackPressed && this.lastBackPressed + 1000 >= Date.now()) {
      BackHandler.exitApp();
      // authorization.onLogoutCompleted$.next(true);
      return false;
    }

    this.lastBackPressed = Date.now();

    return true;
  };

  setNavigationRef = (nav: NavigationContainerComponent) => {
    setNavigator(nav);
  };

  render() {
    const { navigation } = this.props;

    return <AuthStack ref={this.setNavigationRef} navigation={navigation} />;
  }
}
