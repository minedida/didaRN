import ComponentsView from "./views/components-view";
import LegendsView from "./views/legends-view";
import AxisView from "./views/axis-view";
import ContainersView from "./views/containers-view";
import CreateContainerView from "./views/create-container-view";
import ErrorsTooltipsView from "./views/errors-tooltips-view";
import AreaView from "./views/area-view";
import PieView from "./views/pie-view";
import BarView from "./views/bar-view";
import ChartView from "./views/chart-view";
import LineView from "./views/line-view";
import ScatterView from "./views/scatter-view";
import BoxPlotView from "./views/boxplot-view";

import { createListStackNavigator } from "../DemoUtil";

const routers = [
  ComponentsView,
  AreaView,
  PieView,
  BarView,
  BoxPlotView,
  ChartView,
  LineView,
  ScatterView,
  ContainersView,
  CreateContainerView,
  LegendsView,
  AxisView,
  ErrorsTooltipsView
]

export default createListStackNavigator(routers, 'VictoryDemo');
