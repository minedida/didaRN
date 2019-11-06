import AnExApp from "./AnExApp";
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  AnExApp,
]

export default createNestStackNavigator(routers, 'AnExApp')
