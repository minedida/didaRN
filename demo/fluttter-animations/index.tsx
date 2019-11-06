import FlutterAnimation from './demo';
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  FlutterAnimation,
]

export default createNestStackNavigator(routers, 'FlutterAnimationDemo')
