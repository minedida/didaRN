import ReanimatedCollapsibleNavbar from './reanimated-collapsible-navbar/ReanimatedCollapsibleNavbar';
import ReactNativeScrollableHeader from './react-native-scrollable-header/ReactNativeScrollableHeader';
import NestedDemo1 from './others/NestedDemo1.js';
import NestedDemo2 from './others/NestedDemo2.js';
import NestedDemo3 from './others/NestedDemo3.js';
import NestedDemo4 from './others/NestedDemo4.js';
import NestedDemo5 from './others/NestedDemo5.js';
import SimpleTabDemo from './others/SimpleTabDemo.js';
import StickyHeader from './others/StickyHeader.js';
import XidDingDemo1 from './others/XidDingDemo1.js';
import XidDingDemo2 from './others/XidDingDemo2.js';
import TestCollapsible from './test';
import RNSearchBarAnimation from './rn-search-bar-animation';
import { createListStackNavigator } from "../DemoUtil";

const routers = [
  RNSearchBarAnimation,
  TestCollapsible,
  ReanimatedCollapsibleNavbar,
  ReactNativeScrollableHeader,
  NestedDemo1,
  NestedDemo2,
  NestedDemo3,
  NestedDemo4,
  NestedDemo5,
  SimpleTabDemo,
  StickyHeader,
  XidDingDemo1,
  XidDingDemo2,
]

export default createListStackNavigator(routers, 'CollapsibleExample');
