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
// @ts-ignore
import HumanShowcaseScreen from './react-native-typography/HumanShowcaseScreen'
// @ts-ignore
import MaterialShowcaseScreen from './react-native-typography/MaterialShowcaseScreen'
// @ts-ignore
import TypographyExample from './react-native-typography/TypographyExample'
// @ts-ignore
import Header from './Header/'
import SplashScreen from "react-native-splash-screen";
// @ts-ignore
import KeyboardDemoScreen from './keyboard-input/demoScreen';
// @ts-ignore
import RecycleTestComponent from './recyclerlistview/RecycleTestComponent'
// @ts-ignore
import StickySample from './recyclerlistview/StickySample'
// @ts-ignore
import NativeMaterialDialog from './material-dialog/NativeMaterialDialog'
// @ts-ignore
import SyanImagePicker from './image-picker/SyanImagePicker'
// @ts-ignore
import OfflineDemo from './offline/OfflineDemo'


class Demo extends React.Component {

  componentDidMount(): void {
    Platform.OS === 'android' && SplashScreen.hide();
  }

  render() {
    return <OfflineDemo/>
  }
}

export default Demo
