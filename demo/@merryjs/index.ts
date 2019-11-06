import MerryPhotoViewer from './photo-viewer/MerryPhotoViewer';
import { createNestStackNavigator } from "../DemoUtil";

const routers = [
  MerryPhotoViewer,
]

export default createNestStackNavigator(routers, 'MerryPhotoViewerDemo')
