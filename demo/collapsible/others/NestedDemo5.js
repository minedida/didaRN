import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl, Dimensions,
} from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import RefreshDemo from '../refresh-list-view/RefreshListViewDemo';
import StickyHeader from './StickyHeader';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;

const FirstRoute = () => (
  <View style={[{ flex: 1, backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[{ flex: 1, backgroundColor: '#673ab7' }]} />
);

// 使用组件：`tab-view`、`scrollable-header`、`stickyheader`
// 实现类似功能的文章：https://blog.csdn.net/u011272795/article/details/80714894，未验证


export default class NestedDemo5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        // Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
        0,
      ),
      refreshing: false,
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
      ],
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    let ScrollCmp = data.map((_, i) => (
      <View key={i} style={styles.row}>
        <Text>{i}</Text>
      </View>
    ))
    return (
      <View>
        <View style={{ width: '100%', height: HEADER_MAX_HEIGHT, backgroundColor: 'pink' }} />

        {/*{ScrollCmp}*/}
        {/*<RefreshDemo />*/}

        <TabView
          renderTabBar={(props) => {
            return (
              <StickyHeader
                stickyHeaderY={HEADER_MAX_HEIGHT} // 滑动到多少悬浮
                stickyScrollY={this.state.scrollY}
              >
                <TabBar {...props} />
              </StickyHeader>
            );
          }}
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

  render() {
    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
            />
          }
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
