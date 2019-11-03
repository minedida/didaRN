import { Nested1, Nested2 } from "./NestedScreenDemo";
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  Nested1,
  Nested2,
]

export default createNestStackNavigator(routers, 'NestedScreenDemo')
