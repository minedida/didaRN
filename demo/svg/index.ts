import ConicalGradientProgressDemo from './conical-gradient-progress/index.js'
import CircleEffectDemo from './circle-effect/index.js'
import { createListStackNavigator } from "../DemoUtil";

const routers = [
  ConicalGradientProgressDemo,
  CircleEffectDemo,
]

export default createListStackNavigator(routers, 'SvgExample');
