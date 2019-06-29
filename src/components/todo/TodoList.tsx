import React from 'react'
import { View, Text, UIManager, LayoutAnimation, Dimensions } from 'react-native'
import { material } from "react-native-typography";
import { Divider } from 'react-native-paper'
import SortableList from '../../libs/react-native-sortable-list/src/SortableList';
import SwipeabTodoItem from "./SwipeabTodoItem";
import { TodoStore } from "../../store/TodoStore";
import { inject, observer } from "mobx-react";
import { ITEM_HEIGHT } from "./Row";

type Props = {
  todo?: TodoStore
  data: Array<TodoModel>
  headerTxt?: string,
}


UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

/**
 功能：
 1。左右滑动
 2。长按拖动
 */

@inject('todo')
@observer
class TodoList extends React.Component<Props, { headerClick: boolean }> {
  constructor(props) {
    super(props)
    this.state = {
      headerClick: false
    }
    this.renderItem = this.renderItem.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
    this.onReleaseRow = this.onReleaseRow.bind(this)
    this.onActivateRow = this.onActivateRow.bind(this)
  }

  componentWillUpdate(): void {
    LayoutAnimation.easeInEaseOut()
  }

  /*renderItem(datas:{item: TodoModel, index: number}) {
    return <SwipeabTodoItem {...datas} />
  }*/
  renderItem(datas) {
    const { data, ...rest } = datas
    const adb = { ...rest, item: datas.data }
    return <SwipeabTodoItem {...adb}/>
  }

  renderSeparator() {
    return <Divider />
  }

  renderListHeader() {
    return <Text style={material.title}
                 onPress={() => this.setState({ headerClick: !this.state.headerClick })}>
      {this.props.headerTxt}</Text>
  }

  /*renderList() {
    const { data } = this.props
    const {FlatList} = require('react-native')
    const {ITEM_HEIGHT} = require('./SwipeabTodoItem')
    return (
      <FlatList data={data} renderItem={this.renderItem} extraData={this.props}
                ItemSeparatorComponent={this.renderSeparator}
                style={{ height: this.state.headerClick ? 0 : data.length * ITEM_HEIGHT }}
                keyExtractor={(item, index) => `${item.toString()}--${index}`}
      />
    )
  }*/

  renderList() {
    const { data } = this.props
    return (
      <SortableList
        data={data}
        sortingEnabled={true}
        style={{ width: Dimensions.get('window').width, height: data.length * ITEM_HEIGHT }}
        onActivateRow={this.onActivateRow}
        onReleaseRow={this.onReleaseRow}
        renderSeparator={this.renderSeparator}
        renderRow={this.renderItem}/>
    )
  }

  onActivateRow() {
    this.props.todo!.todoItemSortableEnable = true
  }

  onReleaseRow() {
    this.props.todo!.todoItemSortableEnable = false
  }

  render() {
    const { data } = this.props
    if (data.length === 0)
      return null
    return (
      <View>
        {this.props.headerTxt && this.renderListHeader()}
        {!this.state.headerClick && this.renderList()}
      </View>
    );
  }
}

export default TodoList
