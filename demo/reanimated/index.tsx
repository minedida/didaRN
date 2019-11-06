import ReanimatedExample from './reanimated-example/App.js'
import StatefulButtonExample from './statefulButton-example/StatefulButtonExample'
// import DragDropExample from './Drag-and-DropRN/DragDropExample';
// import BottomSheetExample from './reanimated-bottom-sheet';
import ReanimatedTest1 from './reanimated-test';
import ReanimatedTest2 from './reanimated-test/index2';
import SliderDemo from './slider';
import CollapsibleHeader1 from './collapsible-header1';
import CollapsibleHeader2 from './collapsible-header2';


import { createListStackNavigator } from "../DemoUtil";

const routers = [
  ReanimatedExample,
  StatefulButtonExample,
  ReanimatedTest1,
  ReanimatedTest2,
  SliderDemo,
  CollapsibleHeader1,
  CollapsibleHeader2,
  // DragDropExample,
  // BottomSheetExample,
]

export default createListStackNavigator(routers, 'ReanimatedDemo');
