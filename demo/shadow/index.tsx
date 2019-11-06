import ShadowDemo1 from './ShadowDemo1'
import ShadowDemo2 from './ShadowDemo2'
import ShadowDemo3 from './ShadowDemo3'
import { createListStackNavigator } from "../DemoUtil";

const routers = [
  ShadowDemo1,
  ShadowDemo2,
  ShadowDemo3,
]

export default createListStackNavigator(routers, 'ShadowExample');
