import Count1 from "./Count1";
import Count2 from "./Count2";
import Count3 from "./Count3";
import { EventTestFunc1, EventTestFunc2 } from './EventTest';

import { createListStackNavigator } from "../DemoUtil";

const routers = [
  Count1,
  Count2,
  Count3,
  EventTestFunc1,
  EventTestFunc2,
]

export default createListStackNavigator(routers, 'HooksExample');
