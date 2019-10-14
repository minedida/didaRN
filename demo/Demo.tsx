import React, { useState, useEffect } from 'react'
import { Platform, ScrollView, View, Easing } from 'react-native'
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import DemoRouters from './DemoRouters';
import { NavigationBar } from "../src/components";
import SplashScreen from "react-native-splash-screen";

const MapView = (props) => (
  <>
    {
      DemoRouters.map((item: any, index) =>
        <List.Item
          key={item.displayName}
          title={item.displayName}
          onPress={() => props.onItemPress(index)}
        />
      )
    }
  </>
);
const NavigationView = ({initialRouteName = ''}) => {
  const routeConfigMap = DemoRouters.reduce((p, c) => {
    p[c.displayName] = c;
    return p;
  }, {});
  const Navigation = createAppContainer(
    createStackNavigator(
      routeConfigMap,
      {
        initialRouteName,
        headerMode: 'none',
      })
  );
  return <Navigation />;
};

const Demo = () => {
  const [index, setIndex] = useState(-1) as any;
  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
  });

  function renderListView() {
    if (!DemoRouters.length) {
      console.error('No Demo Component List Data!!')
    }
    return (
      <ScrollView>
        <MapView onItemPress={index => setIndex(index)} />
      </ScrollView>
    )
  }
  function renderContent() {
    if (index === -1) {
      return renderListView();
    } else {
      return <NavigationView initialRouteName={DemoRouters[index].displayName} />;
    }
  }
  function renderHeader() {
    const cmp = DemoRouters[index];
    const params = {
      title: cmp ? cmp.displayName : 'Demo',
      leftButton: cmp ? undefined : null,
      onBackPress: () => setIndex(-1),
    };
    return <NavigationBar {...params} />;
  }
  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderContent()}
    </View>
  )
};


export default Demo
