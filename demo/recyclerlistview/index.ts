import RecycleTestComponent from './RecycleTestComponent'
import StickySample from './StickySample'

import { createListStackNavigator } from "../DemoUtil";

const routers = [
  RecycleTestComponent,
  StickySample,
]

export default createListStackNavigator(routers, 'RecyclerListViewExample');
