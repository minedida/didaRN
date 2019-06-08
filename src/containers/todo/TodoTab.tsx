import React from 'react'
import { inject, observer } from "mobx-react";
import { DrawerItems, DrawerStore } from "../../store/DrawerStore";
import { TodoTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";
import InboxTodo from "../drawer/InboxTodo";
import TodayTodo from "../drawer/TodayTodo";

type Props = {
  drawer: DrawerStore
}

const DrawerItemComponents = {
  InboxTodo,
  TodayTodo
}

@inject('drawer') @observer
class TodoTab extends React.Component<Props> {
  static navigationOptions = TodoTabNavigationOptions;

  render() {
    const SelectedItem: DrawerItems = this.props.drawer!.selectedItem
    const DrawerItemComponent = DrawerItemComponents[SelectedItem] as any;
    return <DrawerItemComponent/>
    // return <IconsPreview/>
  }
}

export default TodoTab
