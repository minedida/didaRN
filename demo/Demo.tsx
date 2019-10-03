import React from 'react'
import { Platform } from 'react-native'
// @ts-ignore
import TabViewExampleList from './react-native-tab-view/TabViewExampleList';
// @ts-ignore
import SortableListExample from './sort-and-swipe/react-native-sortable-list/example/SortableListExample';
// @ts-ignore
import SortableListViewExample from './sort-and-swipe/react-native-sortable-list/example/SortableListViewExample';
// @ts-ignore
import DragableListExample from './sort-and-swipe/react-native-sortable-list/example/DragableListExample';
// @ts-ignore
import SwipeableExample from './sort-and-swipe/react-native-swipeable/Example'
// @ts-ignore
import CustomSortAndSwipeList from './sort-and-swipe/react-native-sort-and-swipe-list/src/CustomSortAndSwipeList'
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
// @ts-ignore
import RNShareDemo from './Share/RNShareDemo'
// @ts-ignore
import RNCShareDemo from './Share/RNCShareDemo'
// @ts-ignore
import Count1 from './hooks/Count1'
// @ts-ignore
import Count2 from './hooks/Count2'
// @ts-ignore
import Count3 from './hooks/Count3'
// @ts-ignore
import LightboxDemo from './light-demo/LightboxDemo'
// @ts-ignore
import ReanimatedCollapsibleNavbar from './collapsible/reanimated-collapsible-navbar/ReanimatedCollapsibleNavbar';
// @ts-ignore
import ReactNativeScrollableHeader from './collapsible/react-native-scrollable-header/ReactNativeScrollableHeader';
// import ExpoExample from './expo/ExpoExample'
// import RNScreensExample from './rn-screens/App';
// @ts-ignore
import SpecificPlatformExample from './specific-platform';
// import SpecificPlatformTSExample from './specific-platform-ts';

import MerryPhotoViewer from './@merryjs/photo-viewer/MerryPhotoViewer';

class Demo extends React.Component {

  componentDidMount(): void {
    Platform.OS === 'android' && SplashScreen.hide();
  }

  render() {
    return <MerryPhotoViewer/>
  }
}

export default Demo
