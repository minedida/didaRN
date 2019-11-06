import OfflineDemo from './OfflineDemo'
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  OfflineDemo,
]

export default createNestStackNavigator(routers, 'OfflineDemo')
