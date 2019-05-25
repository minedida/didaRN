import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TodoList from '../containers/Todo/Todo';
import Profile from '../containers/User/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { d } from "../helper/utils/ScreenUtil";

const navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    switch (routeName) {
      case 'UserMain':
        iconName = 'apple';
        break;
      case 'TodoMain':
        iconName = 'android';
        break;
    }
    return (
      <Icon name={iconName} size={d(25)} color={tintColor}/>
    );
  },
  tabBarLabel: ({ tintColor }: {tintColor: any}) => {
    const { routeName } = navigation.state;
    return (
      <Text style={{ color: tintColor }}>
        {routeName}
      </Text>
    );
  },
})

const tabBarOptions = {
  safeAreaInset: { bottom: 'never', top: 'never' },
  activeTintColor: '#4a65c6',
  inactiveTintColor: '#5f5f5f',
  tabStyle: {
    backgroundColor: '#ffffff',
    alignItems:'center',
    justifyContent: 'center'
  }
}as any
export default createBottomTabNavigator(
  {
    TodoMain: TodoList,
    UserMain: Profile,
  },
  {
    initialRouteName: 'TodoMain',
    navigationOptions,
    tabBarOptions,
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
  },
);
