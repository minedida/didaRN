import SpecificPlatformJSExample from './js';
import SpecificPlatformTSExample from './ts';
import { createListStackNavigator } from "../DemoUtil";

const routers = [
  SpecificPlatformJSExample,
  SpecificPlatformTSExample,
]

export default createListStackNavigator(routers, 'SpecificPlatformExample');
