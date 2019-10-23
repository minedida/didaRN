import React, { useState, useEffect } from 'react'
import { Platform, ScrollView } from 'react-native'
import { List } from 'react-native-paper';
import SplashScreen from "react-native-splash-screen";
import { createAppContainer, createStackNavigator } from 'react-navigation'
import DemoRouters from './DemoRouters';
import { NavigationBar } from "../src/components";

const getComponentName = (cmp) => cmp.displayName || cmp.name || '';

const MapView = (props) => (
  <>
    {
      DemoRouters.map((item: any, index) =>
        <List.Item
          key={getComponentName(item)}
          title={getComponentName(item)}
          onPress={() => props.onItemPress(index)}
        />
      )
    }
  </>
);
const NavigationView = ({initialRouteName, setRef, ...props}) => {
  const routeConfigMap = DemoRouters.reduce((p, c) => {
    p[getComponentName(c)] = c;
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
  return <Navigation ref={setRef} {...props}/>;
};

const Demo = () => {
  const [index, setIndex] = useState(-1) as any;
  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
  });

  const ContentList = () => {
    if (!DemoRouters.length) {
      console.error('No Demo Component List Data!!')
    }
    return (
      <ScrollView
        style={{ backgroundColor: '#fff' }}
      >
        <MapView onItemPress={index => setIndex(index)} />
      </ScrollView>
    )
  }
  const Content =() => {
    if (index === -1) {
      return <ContentList />;
    } else {
      const name = getComponentName(DemoRouters[index]);
      return <NavigationView setRef={ref => this.route = ref} initialRouteName={name} />;
    }
  }
  const Header = () => {
    const cmp = DemoRouters[index];
    const params = {
      title: cmp ? getComponentName(cmp) : 'Demo',
      leftButton: cmp ? undefined : null,
      onBackPress: () => {
        setIndex(-1);
      },
    };
    return <NavigationBar {...params} />;
  };
  return (
    <>
      <Header />
      <Content />
    </>
  )
};
class Demo3 extends React.Component{
  render() {
    return <Demo />
  }
}

export default Demo3
