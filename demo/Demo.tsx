import React from 'react'
import { Platform } from 'react-native'
// @ts-ignore
import TabViewExampleList from './react-native-tab-view/TabViewExampleList';
// @ts-ignore
import SortableListExample from './react-native-sortable-list/example/SortableListExample';
// @ts-ignore
import SortableListViewExample from './react-native-sortable-list/example/SortableListViewExample';
// @ts-ignore
import DragableListExample from './react-native-sortable-list/example/DragableListExample';
// @ts-ignore
import SwipeableExample from './react-native-swipeable/Example'

import SplashScreen from "react-native-splash-screen";

class Demo extends React.Component {

  componentDidMount(): void {
    Platform.OS === 'android' && SplashScreen.hide();
  }

  render() {
    return <SortableListExample/>
  }
}

export default Demo
