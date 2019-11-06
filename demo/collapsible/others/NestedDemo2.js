import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import RefreshDemo from '../refresh-list-view/RefreshListViewDemo';

const FirstRoute = () => (
  <View style={[{ flex: 1, backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[{ flex: 1, backgroundColor: '#673ab7' }]} />
);

class NestedDemo2 extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <View
        style={{ flex: 1 }}
        bounces={false} nestedScrollEnabled
      >
        <View style={{ height: 300, backgroundColor: 'violet' }} />

        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: RefreshDemo,
            second: SecondRoute,
          })}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />

      </View>
    );
  }
}

export default NestedDemo2;
