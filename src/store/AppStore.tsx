import { action, observable } from 'mobx'
import TodoTab from "../containers/todo/TodoTab";
import CalendarTab from "../containers/calendar/CalendarTab";
import SettingTab from "../containers/setting/SettingTab";
import SearchTab from "../containers/search/SearchTab";
import TomatoTab from "../containers/tomato/TomatoTab";
import ClockInTab from "../containers/clockin/ClockInTab";

class AppStore {
  @observable appTabs: Array<{ index: number, cmp: any, show: boolean }> = [
    { index: 0, cmp: TodoTab, show: true },
    { index: 1, cmp: CalendarTab, show: true },
    { index: 2, cmp: TomatoTab, show: false },
    { index: 3, cmp: ClockInTab, show: false },
    { index: 4, cmp: SearchTab, show: false },
    { index: 5, cmp: SettingTab, show: true },
  ]


  @action.bound
  changeTabs(index: number) {
    this.appTabs[index].show = !this.appTabs[index].show
  }

}

const app = new AppStore()
export {
  app,
  AppStore
}

