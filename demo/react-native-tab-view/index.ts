import { createListStackNavigator } from "../DemoUtil";
import ScrollableTabBarExample from "./src/ScrollableTabBarExample";
import AutoWidthTabBarExample from "./src/AutoWidthTabBarExample";
import TabBarIconExample from "./src/TabBarIconExample";
import CustomIndicatorExample from "./src/CustomIndicatorExample";
import CustomTabBarExample from "./src/CustomTabBarExample";
import CoverflowExample from "./src/CoverflowExample";

const routers = [
  ScrollableTabBarExample,
  AutoWidthTabBarExample,
  TabBarIconExample,
  CustomIndicatorExample,
  CustomTabBarExample,
  CoverflowExample,
]

export default createListStackNavigator(routers, 'TabViewExampleList')
