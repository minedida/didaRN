import CloneElement from './CloneElement';
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  CloneElement,
]

export default createNestStackNavigator(routers, 'ReactDemo')
