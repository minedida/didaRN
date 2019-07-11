import React from 'react'
import { UIManager, LayoutAnimation } from 'react-native'
import { Divider } from 'react-native-paper'
import SortableList from '../../libs/react-native-sortable-list/src/SortableList';
import { TodoStore } from "../../store/TodoStore";
import { inject, observer } from "mobx-react";
import { TodoModel } from "../../model";
import Row from "./Row";

type Props = {
  todo?: TodoStore
  data: Array<TodoModel>
  headerTxt?: string,
  renderHeader?: () => void,
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
    this.renderHeader = this.renderHeader.bind(this)
    this.onItemCheck = this.onItemCheck.bind(this)
  }

  componentWillUpdate(): void {
    LayoutAnimation.easeInEaseOut()
  }

  onItemCheck(id: number) {
    this.props.todo!.checkTodo(id)
  }

  renderSeparator(index: number) {
    if (index !== this.props.data.length) {
      return <Divider/>
    }
    return null
  }
  renderHeader() {
    return this.props.renderHeader && this.props.renderHeader()
  }

  renderItem(datas: {key: number, data: TodoModel, disabled: boolean, active: boolean, index: number}) {
    const { data, ...rest } = datas
    const adb = { ...rest, item: datas.data }
    return <Row {...adb} onItemCheck={this.onItemCheck}/>;
  }

  renderList() {
    // todo 改造为多条目
    return (
      <SortableList
        manualActivateRows
        renderHeader={this.renderHeader}
        data={this.props.data}
        sortingEnabled={true}
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
    return this.renderList()
  }
}

export default TodoList
