import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { inject, observer } from "mobx-react";
import { Space, Checkbox } from "../";
import { d } from "../../helper/utils/ScreenUtil";
import { material } from "react-native-typography";
import { TodoStore } from "../../store/TodoStore";

export const ITEM_HEIGHT = d(66)

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    paddingHorizontal: d(10)
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  }
})

type RowProps = {
  item: TodoModel
  active: boolean
  index: number
  disable: boolean
  todo?: TodoStore
}

@inject('todo')
@observer
export class Row extends React.Component<RowProps>{

  render() {
    // todo 去除Checkbox的padding
    const { item } = this.props
    const checkboxStatus = item.checked ? 'checked' : 'unchecked'
    return (
      <View style={[styles.container]}>
        <Space height={d(6)}/>
        <View style={styles.topView}>
          <Checkbox status={checkboxStatus} onPress={() => this.props.todo!.checkTodo(item.id)}/>
          <Text numberOfLines={1} style={material.body1}>{item.title}</Text>
        </View>
        <Text numberOfLines={1} style={[material.body1, { paddingLeft: d(34), includeFontPadding: false }]}>6月29日</Text>
      </View>
    )
  }
}
export default Row

/**
 这里的row有两种高度
  当正文显示一行时，高度 d(50)
  当正文显示两行时，高度 d(66)
**/
