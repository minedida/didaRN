import MenuDemo from './MenuDemo';
import PaperHeader from './PaperHeader';
import ToolbarHeader from './ToolbarHeader';


import { createListStackNavigator } from "../DemoUtil";

const routers = [
  MenuDemo,
  PaperHeader,
  ToolbarHeader,
]

export default createListStackNavigator(routers, 'HeaderExample');
