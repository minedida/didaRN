import React from 'react'
import { Platform } from 'react-native'
// @ts-ignore
import TabViewExampleList from './react-native-tab-view/TabViewExampleList';
import SortableListExample from './react-native-sortable-list/example/SortableListExample';
// @ts-ignore
import DragableListExample from './react-native-sortable-list/example/DragableListExample';

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
