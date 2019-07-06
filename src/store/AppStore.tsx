import { action, computed, observable } from 'mobx'
import { Theme } from 'react-native-paper'
import {TodoTab, CalendarTab, SearchTab, SettingTab, TomatoTab, ClockinTab} from '../containers'
import { theme } from "../theme";


class AppStore {
  constructor() {
    //  autorun 可以检测到自己的store发生变化
    // autorun(()=> console.log(`AppStore changed: ${JSON.stringify(this.appTabs)}`));
    // observe(this, 'currentScreen', change => console.log(change))
  }

  @observable appTabs: Array<{ index: number, cmp: any, show: boolean }> = [
    { index: 0, cmp: TodoTab, show: true },
    { index: 1, cmp: CalendarTab, show: true },
    { index: 2, cmp: TomatoTab, show: false },
    { index: 3, cmp: ClockinTab, show: false },
    { index: 4, cmp: SearchTab, show: false },
    { index: 5, cmp: SettingTab, show: true }
  ]


  // {[index: string]: any} 动态索引签名
  @computed get tabMap(): { [index: string]: any } {
    return this.appTabs.reduce((p, c) => {
      if (c.show) {
        // get injected component by mobx displayName or plain Component's name
        let name = c.cmp.displayName || c.cmp.name
        console.log(`AppStore-reduce-name:\n:${JSON.stringify(name)}`)
        if (name.indexOf('inject') > -1) {
          name = name.split('-')[1];
          p[name] = c.cmp;
        } else {
          // get a plain Component displayName
          p[name] = c.cmp;
        }
      }
      return p;
    }, {})
  }

  @observable appTheme: Theme = theme
  @observable currentScreen: string = ''

  @action.bound
  setCurrentScreen(currentScreen) {
    this.currentScreen = currentScreen
  }


  @computed get fabVisible(): boolean {
    const fabVisibleScreenArrays = ['TodoTab', 'CalendarTab', 'ClockinTab', 'SearchTab']

    return fabVisibleScreenArrays.findIndex(v => v === this.currentScreen) > -1;
  }

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

