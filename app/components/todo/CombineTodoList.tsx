import React from 'react'
import { UIManager, LayoutAnimation } from 'react-native'
import TodoList from "./TodoList";

/**
 功能：
 1。多条目类型
 */

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class CombineTodoList extends React.Component<any> {

  componentWillUpdate(): void {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    return <TodoList {...this.props} data={this.props.uncheckedList}/>
  }
}

export default CombineTodoList
