import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Space, Checkbox } from "../";
import { d } from "../../helper/utils/ScreenUtil";
import { material } from "react-native-typography";
import { TodoStore } from "../../store/TodoStore";
import { TodoModel } from "../../model";
import { prettyLog } from "../../helper/utils/Utils";

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
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,

    elevation: 4,
    zIndex:4
  }
})

type RowProps = {
  item: TodoModel
  active: boolean
  index: number
  disabled: boolean
  todo?: TodoStore
  onItemCheck: (id: number) => void
}
// SortableList-row
/*export class Row extends React.PureComponent<RowProps>{

  render() {
    console.log(`Row-render`)

    // todo 去除Checkbox的padding
    const { item , active} = this.props
    const checkboxStatus = item.checked ? 'checked' : 'unchecked'
    const shadowStyle = active ? styles.shadow : {};
    return (
      <View style={[styles.container, shadowStyle]}>
        <Space height={d(6)}/>
        <View style={styles.topView}>
          <Checkbox status={checkboxStatus}
            // onPress={() => this.props.todo!.checkTodo(item.id)}
                    onPress={() => this.props.onItemCheck(item.id)}
          />
          <Text numberOfLines={1} style={material.body1}>{item.title}</Text>
        </View>
        <Text numberOfLines={1} style={[material.body1, { paddingLeft: d(34), includeFontPadding: false }]}>6月29日</Text>
      </View>
    )
  }
}
export default Row*/

export default class Row extends React.Component<TodoModel>{

  shouldComponentUpdate(nextProps: Readonly<TodoModel>): boolean {
    prettyLog(this.props, 'Row-this.props:')
    prettyLog(nextProps, 'Row-nextProps:')

    if (nextProps.checked !== this.props.checked) {
      return true
    }
    return false
  }

  render() {
    console.log(`Row-render`)
    const {checked, id, title} = this.props
    const checkboxStatus = checked ? 'checked' : 'unchecked'
    return (
      <View style={[styles.container]}>
        <Space height={d(6)}/>
        <View style={styles.topView}>
          <Checkbox status={checkboxStatus}
            // onPress={() => this.props.todo!.checkTodo(item.id)}
                    onPress={() => this.props.onItemCheck(id)}
          />
          <Text numberOfLines={1} style={material.body1}>{title}</Text>
        </View>
        <Text numberOfLines={1} style={[material.body1, { paddingLeft: d(34), includeFontPadding: false }]}>6月29日</Text>
      </View>
    )
  }
}

/**
 这里的row有两种高度
 当正文显示一行时，高度 d(50)
 当正文显示两行时，高度 d(66)
 **/
