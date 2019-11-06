import React from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image, Dimensions, FlatList, Animated,
} from 'react-native';
import RefreshDemo from '../refresh-list-view/RefreshListViewDemo';

const { height: screenH, width: screenW } = Dimensions.get('window');

const TabPage = (props) => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 22, 22, 1, 1, 1, 1, 1, 1, 1];
  for (let i = 0; i < 100; i++) {
    a.push(i + 'a');
  }
  return (
    <View style={{ backgroundColor: 'pink' }}>
      <Animated.FlatList
        keyExtractor={(item, index) => index + ''}
        data={a}
        renderItem={({ item }) => <Text>{item}</Text>}
        onScroll={props.onScroll}
        overScrollMode={'never'}
      />

    </View>
  );
};

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        {this.renderScrollTab()}

      </View>
    );
  }

  onScroll = (e) => {
    let { x, y } = e.nativeEvent.contentOffset;
    console.log(y);
    if (y <= 100) {
      this.refs._title.setNativeProps({

        style: {
          top: -y,
        },
      });
      this.refs._scrolltab.setNativeProps({
        style: {
          marginTop: 100 - y,
        },
      });
    } else {
      this.refs._title.setNativeProps({
        style: {
          top: -100,
        },
      });
      this.refs._scrolltab.setNativeProps({
        style: {
          marginTop: 0,
        },
      });
    }
  };


  /**
   * 渲染头部
   * @private
   */
  _renderHeader() {
    let icon = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496299246419&di=f6d9e7d99236cb4319782d95cbd7f740&imgtype=0&src=http%3A%2F%2Fwww.pptbz.com%2FSoft%2FUploadSoft%2F200911%2F2009110521380826.jpg';
    return (
      <ImageBackground
        ref={'_title'}
        style={styles.headerContainer}
        source={{ uri: icon }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={{ uri: icon }}
          />
          <View>
            <Text allowFontScaling={false} style={{ color: 'white' }}>苹果旗舰店</Text>
            <Text allowFontScaling={false} style={{ color: 'white' }}>此处是促销信息</Text>
          </View>
          <View>
            <Text allowFontScaling={false} style={{ color: 'white' }}>已有2000人关注</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  renderScrollTab() {
    return (
      <View
        ref={'_scrolltab'}
        style={styles.scrollTab}>
        <ScrollableTabView
          listKey='d' key='4'

          style={{ height: screenH }}
          renderTabBar={() => <ScrollableTabBar/>}
        >
          <RefreshDemo listKey='a' key='1' tabLabel='Tab #1' onScroll={this.onScroll}/>
          <TabPage listKey='b' key='2' tabLabel='Tab #2' onScroll={this.onScroll}/>
          <TabPage listKey='c' key='3' tabLabel='Tab #3' onScroll={this.onScroll}/>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenW,
  },
  headerContainer: {
    width: screenW,
    height: 100,
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
  },
  scrollTab: {
    flex: 1,
    marginTop: 100,
  },
});
