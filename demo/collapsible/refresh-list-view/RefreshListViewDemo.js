//
//  Created by Liu Jinyong on 17/4/5.
//  Copyright © 2016年 Liu Jinyong. All rights reserved.
//
//  @flow
//  Github:
//  https://github.com/huanxsd/react-native-refresh-list-view

import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import RefreshListView, { RefreshState } from './RefreshListView'
import Cell from './Cell'
import testData from './data'
import {FlatList} from "../rn-search-bar-animation/searchBarAnimation";

class RefreshListViewDemo extends Component {
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

    // 模拟网络请求
    setTimeout(() => {
      // // 模拟网络加载失败的情况
      // if (Math.random() < 0.2) {
      //   this.setState({ refreshState: RefreshState.Failure })
      //   return
      // }

      //获取测试数据
      let dataList = this.getTestList(true)

      this.setState({
        dataList: dataList,
        refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
      })
    }, 2000)
  }

  onFooterRefresh = () => {
    this.setState({ refreshState: RefreshState.FooterRefreshing })

    // 模拟网络请求
    setTimeout(() => {
      // // 模拟网络加载失败的情况
      // if (Math.random() < 0.2) {
      //   this.setState({ refreshState: RefreshState.Failure })
      //   return
      // }

      //获取测试数据
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

  // render() {
  //   return <View style={{ width: 375, height: 60, backgroundColor: 'pink' }}/>
  // }

  render() {
    return (
      <RefreshListView
        data={this.state.dataList}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderCell}
        refreshState={this.state.refreshState}
        onHeaderRefresh={this.onHeaderRefresh}
        onFooterRefresh={this.onFooterRefresh}
        tabRoute={this.props.route.key}

        // 可选
        footerRefreshingText='玩命加载中 >.<'
        footerFailureText='我擦嘞，居然失败了 =.=!'
        footerNoMoreDataText='-我是有底线的-'
        footerEmptyDataText='-好像什么东西都没有-'
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
  title: {
    fontSize: 18,
    height: 84,
    textAlign: 'center'
  }
})

export default RefreshListViewDemo
