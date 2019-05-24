import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TodoList from '../containers/Todo/Todo';
import Profile from '../containers/User/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

export default createBottomTabNavigator(
  {
    TodoMain: TodoList,
    UserMain: Profile,
  },
  {
    navigationOptions: ({ navigation }) => ({
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
          <Icon name={iconName} size={25} color={tintColor}/>
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
    }),
    initialRouteName: 'TodoMain',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: '#999',
      tabStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    },
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
  },
);
