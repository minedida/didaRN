import React from 'react'
import { UIManager, LayoutAnimation, View } from 'react-native'
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
    return (
      <View style={{ flex: 1 }}>
        <TodoList {...this.props} data={this.props.uncheckedList}/>
        <TodoList {...this.props} data={this.props.checkedList} headerTxt={'已完成'}/>
      </View>
    )
    // return <TodoList data={uncheckedList}/>
  }
}

export default CombineTodoList
