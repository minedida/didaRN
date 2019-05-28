import React from 'react'
import { inject, observer } from "mobx-react";
import { DrawerItems, DrawerStore } from "../../store/DrawerStore";
import { TodoNavigationOptions } from "../../navigation/NavigationOptions";
import InboxTodo from "../Drawer/InboxTodo";
import TodayTodo from "../Drawer/TodayTodo";


type Props = {
  drawer: DrawerStore
}

const DrawerItemComponents = {
  InboxTodo,
  TodayTodo
}

@inject('drawer') @observer
class Todo extends React.Component<Props> {
  static navigationOptions = TodoNavigationOptions;

  render() {
    const SelectedItem: DrawerItems = this.props.drawer!.selectedItem
    const DrawerItemComponent = DrawerItemComponents[SelectedItem] as any;
    return <DrawerItemComponent/>
  }
}

export default Todo
