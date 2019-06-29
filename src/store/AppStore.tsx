import { action, computed, observable } from 'mobx'
import { Theme } from 'react-native-paper'
import TodoTab from "../containers/todo/TodoTab";
import CalendarTab from "../containers/calendar/CalendarTab";
import SettingTab from "../containers/setting/SettingTab";
import SearchTab from "../containers/search/SearchTab";
import TomatoTab from "../containers/tomato/TomatoTab";
import ClockInTab from "../containers/clockin/ClockInTab";
import { theme } from "../theme";


class AppStore {
  constructor() {
    //  autorun 可以检测到自己的store发生变化
    // autorun(()=> console.log(`AppStore changed: ${JSON.stringify(this.appTabs)}`));
  }
  @observable appTabs: Array<{ index: number, cmp: any, show: boolean }> = [
    { index: 0, cmp: TodoTab, show: true },
    { index: 1, cmp: CalendarTab, show: true },
    { index: 2, cmp: TomatoTab, show: false },
    { index: 3, cmp: ClockInTab, show: false },
    { index: 4, cmp: SearchTab, show: false },
    { index: 5, cmp: SettingTab, show: true },
  ]


  // {[index: string]: any} 动态索引签名
  @computed get tabMap(): {[index: string]: any} {
    return this.appTabs.reduce((p, c) => {
      if (c.show === true) {
        // get injected component by mobx displayName
        if (c.cmp.displayName.indexOf('inject') > -1) {
          const displayName = c.cmp.displayName.split('-')[1]
          p[displayName] = c.cmp;
        } else {
          // get a plain Component displayName
          p[c.cmp.displayName] = c.cmp;
        }
      }
      return p;
    }, {})
  }

  @observable appTheme: Theme = theme
  @observable fabVisible: boolean = true

  @action.bound
  changeThemeColor(color: string) {
    this.appTheme = {
      ...this.appTheme,
      colors: {
        ...this.appTheme.colors,
        primary: color
      }
    }
  }


  @action.bound
  changeTabs(index: number) {
    // 直接在原数组的基础上修改内部多层嵌套的一个对象的状态，很难被发现从而产生后续动作
    // 最简单的方式使用ES6语法返回一个新的数组即可达到state change的效果。这里还可以使用immutable.js
    // this.appTabs[index].show = !this.appTabs[index].show
    return this.appTabs = this.appTabs.map(
      (item, i) =>
        i === index ? { ...item, show: !item.show } : item
    )
  }

}

const app = new AppStore()

export {
  app,
  AppStore
}

