import NativeMaterialDialogDemo from './material-dialog/NativeMaterialDialog'

import { createListStackNavigator } from "../DemoUtil";

const routers = [
  NativeMaterialDialogDemo,
]

export default createListStackNavigator(routers, 'DialogExample');
