import { createListStackNavigator } from "../DemoUtil";
import ProgressiveImageLoadingExample from "./progressive-image-loading";

const routers = [
  ProgressiveImageLoadingExample,
]

export default createListStackNavigator(routers, 'examples-and-tutorials');
