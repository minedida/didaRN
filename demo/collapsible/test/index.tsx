import * as React from "react"
import { View, Text, FlatList, Dimensions } from "react-native"
import Animated, { block } from "react-native-reanimated"
import { onScroll } from "react-native-redash"
import { TabView, TabBar } from 'react-native-tab-view';
import RefreshListView, { RefreshState } from '../refresh-list-view/RefreshListView'
import Cell from '../refresh-list-view/Cell'
import testData from '../refresh-list-view/data'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const AnimatedRefreshListView = Animated.createAnimatedComponent(RefreshListView);
const AnimatedTabView = Animated.createAnimatedComponent(TabView);

const HEADER_HEIGHT = 160
const { diffClamp, interpolate, add, Code, call,
  multiply, event, Value,
} = Animated
const translateY = (y) => {
  const diffClampY = diffClamp(y, 0, HEADER_HEIGHT);
  return interpolate(diffClampY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  })
}
export const Header = ({ y }) => {
  return (
    <Animated.View
      style={ {
        height: HEADER_HEIGHT,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 2,
        backgroundColor: "#ffb74d",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateY: translateY(y) }],
      } }
    >

      <Text>Header</Text>
    </Animated.View>
  )
}

const List = ({ y }) => {
  return (
    <>
      {/*<Code>*/}
      {/*  {() => call([y], v => console.tron.debug({ list: v[0] }))}*/}
      {/*</Code>*/}
      <AnimatedFlatList
        // style={{
        //   paddingTop: HEADER_HEIGHT,
        // }}
        bounces={false}
        onScroll={onScroll({y})}
        scrollEventThrottle={16}
        data={new Array(10).fill(1)}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ _item, index }) => {
          const bgc = "#"+((1<<24)*Math.random()|0).toString(16);
          return (
            <View
              style={ { width: "100%", height: 200, marginBottom: 50, backgroundColor: bgc,
                justifyContent: "center", alignItems: "center", } }
              key={index + ""}
            >
              <Text>test{index}</Text>
            </View>
          )
        }}
      />
    </>
  )
}
class ThirdRoute extends React.Component<any>{
  state: {
    dataList: Array<any>,
    refreshState: number,
  }

  constructor(props) {
    super(props)

    this.state = {
      dataList: [],
      refreshState: RefreshState.Idle,
    }
  }

  componentDidMount() {
    this.onHeaderRefresh()
  }

  onHeaderRefresh = () => {
    this.setState({ refreshState: RefreshState.HeaderRefreshing })
    setTimeout(() => {
      let dataList = this.getTestList(true)

      this.setState({
        dataList: dataList,
        refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
      })
    }, 2000)
  }

  onFooterRefresh = () => {
    this.setState({ refreshState: RefreshState.FooterRefreshing })
    setTimeout(() => {
      let dataList = this.getTestList(false)

      this.setState({
        dataList: dataList,
        refreshState: dataList.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
      })
    }, 2000)
  }

  // 获取测试数据
  getTestList(isReload: boolean): Array<Object> {
    let newList = testData.map((data) => {
      return {
        imageUrl: data.squareimgurl,
        title: data.mname,
        subtitle: `[${data.range}]${data.title}`,
        price: data.price,
      }
    })
    return isReload ? (Math.random() < 0.2 ? [] : newList) : [...this.state.dataList, ...newList]
  }

  keyExtractor = (item: any, index: number) => {
    return index.toString()
  }

  renderCell = (info: Object) => {
    return <Cell info={info.item} />
  }

  render() {
    return (
      <>
        {/*<Code>*/}
        {/*  {() => call([this.props.y], v => console.tron.debug({ refresh: v[0] }))}*/}
        {/*</Code>*/}
        <AnimatedRefreshListView
          bounces={false}
          onScroll={onScroll({y: this.props.y})}
          data={this.state.dataList}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCell}
          refreshState={this.state.refreshState}
          onHeaderRefresh={this.onHeaderRefresh}
          onFooterRefresh={this.onFooterRefresh}
          contentOffset={{
            y: -HEADER_HEIGHT,
          }}

          // 可选
          footerRefreshingText='玩命加载中 >.<'
          footerFailureText='我擦嘞，居然失败了 =.=!'
          footerNoMoreDataText='-我是有底线的-'
          footerEmptyDataText='-好像什么东西都没有-'
        />
      </>
    )
  }
}

const SecondRoute = () => (
  <View style={[{ flex: 1, backgroundColor: '#673ab7' }]} />
);
class TestCollapsible extends React.Component{
  y = new Animated.Value(0);
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
    ],
  };
  renderScene = (v) => {
    console.log(v)
    switch (v.route.key) {
      case 'first':
        return <List y={this.y} />;
      case 'third':
        return <ThirdRoute y={this.y}/>;
        return null;
      case 'second':
        return <SecondRoute/>;
      default:
        return null;
    }
  }
  renderTabBar = (props) => {
    const pt = add(HEADER_HEIGHT, translateY(this.y));
    return (
      <Animated.View
        style={{
          transform: [{ translateY: pt }],
          zIndex: 99,
        }}
      >
        <Code>
          {() => call([pt], v => console.tron.debug({ parents: v[0] }))}
        </Code>
        <TabBar {...props} />
      </Animated.View>
    )
  }
  render() {
    return (
      <View
        style={{ flex: 1 }}
      >

        <Header y={this.y} />
        <AnimatedTabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
        {/*<List y={this.y} />*/}
      </View>
    )
  }
}

export default TestCollapsible;
