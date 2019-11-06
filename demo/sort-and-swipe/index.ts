import SortableListExample from './react-native-sortable-list/example/SortableListExample';
import SortableListViewExample from './react-native-sortable-list/example/SortableListViewExample';
import DragableListExample from './react-native-sortable-list/example/DragableListExample';
import SwipeableExample from './react-native-swipeable/Example'
import CustomSortAndSwipeList from './react-native-sort-and-swipe-list/src/CustomSortAndSwipeList'

import { createListStackNavigator } from "../DemoUtil";

const routers = [
  SortableListExample,
  SortableListViewExample,
  DragableListExample,
  SwipeableExample,
  CustomSortAndSwipeList,
]

export default createListStackNavigator(routers, 'SortAndSwipeExample')
