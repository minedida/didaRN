import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

class FirstRoute extends React.Component {
  componentDidMount(): void {
    console.log('FirstRoute-componentDidMount');
  }

  render() {
    return <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />;
  }
}

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

// eslint-disable-next-line react/no-multi-comp
export default class TabViewExample extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    index: 0,
    // eslint-disable-next-line react/no-unused-state
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        lazy
        style={{ marginTop: 100 }}
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
