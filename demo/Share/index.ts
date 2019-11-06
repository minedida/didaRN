import RNShareDemo from './RNShareDemo'
import RNCShareDemo from './RNCShareDemo'
import { createListStackNavigator } from "../DemoUtil";

const routers = [
  RNShareDemo,
  RNCShareDemo,
]

export default createListStackNavigator(routers, 'ShareExample');
