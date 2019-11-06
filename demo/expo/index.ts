import ExpoExample from './ExpoExample'
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  ExpoExample,
]

export default createNestStackNavigator(routers, 'ExpoExample')
