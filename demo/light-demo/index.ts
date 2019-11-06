import LightboxDemo from './LightboxDemo'
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  LightboxDemo,
]

export default createNestStackNavigator(routers, 'LightboxDemo')
