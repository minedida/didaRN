import { action, computed, observable, observe } from 'mobx'
import { Theme } from 'react-native-paper'
import { persist } from 'mobx-persist'
import {TodoTab, CalendarTab, SearchTab,
  SettingTab, TomatoTab, ClockinTab} from '../containers'
import { theme } from "../theme";
import { Toast } from "../components";
import { AppTabBarModel } from "../model";
import { translate } from "../i18n";
import { getCmpName } from "../helper/utils/Utils";


// 对于UIStore的构建建议：https://cn.mobx.js.org/best/store.html
class AppStore {
  constructor() {
    //  autorun 可以检测到自己的store发生变化
    // autorun(()=> console.log(`AppStore changed: ${JSON.stringify(this.appTabs)}`));
    // observe(this, 'currentScreen', change => console.log(change))
    /**
       @computed get fabVisible(): boolean {
          const fabVisibleScreenArrays = ['TodoTab', 'CalendarTab', 'ClockinTab', 'SearchTab']
          return fabVisibleScreenArrays.findIndex(v => v === this.currentScreen) > -1;
        }
     */
    // 这里期望fabVisible既可以观察别的属性的变化从而计算出自己的值，又期望该计算值可以直接被修改。
    // 所以将@computed get fabVisible()改为@observable fabVisible，在构造方法中监听currentScreen属性，从而自动的计算出fabVisible的值。同时作为一个变量又可以直接被赋值
    observe(this, 'currentScreen', change => {
      const fabVisibleScreenArrays = ['TodoTab', 'CalendarTab', 'ClockinTab', 'SearchTab']
      this.fabVisible = fabVisibleScreenArrays.findIndex(v => v === change.newValue) > -1
    })
    observe(this, 'appTabs', change => {
      console.log('appTabs-change')
      console.log(change)
    })
  }

  @observable fabVisible: boolean = true
  @observable fabOpen: boolean = false

  @observable appTabs: Array<AppTabBarModel> = [
    { index: 0, cmp: TodoTab, show: true },
    { index: 1, cmp: CalendarTab, show: true },
    { index: 2, cmp: TomatoTab, show: true },
    { index: 3, cmp: ClockinTab, show: true },
    { index: 4, cmp: SearchTab, show: true },
    { index: 5, cmp: SettingTab, show: true }
  ]

  @persist('object')
  @observable appTheme: Theme = theme
  @observable currentScreen: string = ''
  @observable isNetworkConnected: boolean = true
  @observable languageTag: string = 'zh'

  // {[index: string]: any} 动态索引签名
  @computed get tabMap(): { [index: string]: any } {
    const value = this.appTabs
    .reduce((p, c) => {
      if (c.show) {
        const name = getCmpName(c.cmp)
        p[name] = c.cmp;
      }
      return p;
    }, {})
    // console.log('AppStore-tabMap-value', value)
    return value;
  }

  @computed get tabRoutes() {
    return this.appTabs
    .filter(v => v.show)
    .reduce((p: any, c) => {
      const name = getCmpName(c.cmp)
      p.push({
        key: name,
        routeName: name,
        params: undefined,
      })
      return p;
    }, [])
  }

  @observable tabMap2 = {
    TodoMain: TodoTab,
    CalendarMain: CalendarTab,
    SettingMain: SettingTab,
  } as any;

  @action.bound
  setCurrentScreen(currentScreen) {
    this.currentScreen = currentScreen
    return this
  }

  @action.bound
  setFabVisible(visible: boolean) {
    this.fabVisible = visible
    return this
  }

  @action.bound
  setFabOpen(visible: boolean) {
    this.fabOpen = visible
    return this
  }

  @action.bound
  setLanguageTag(languageTag: string) {
    this.languageTag = languageTag
    return this
  }

  @action.bound
  setNetworkConnected(isConnected: boolean) {
    Toast.show(`${translate('hello')}:${isConnected}`)
    this.isNetworkConnected = isConnected
    return this
  }

  // 修改Theme的primary color
  @action.bound
  changePrimaryColor(color: string) {
    this.appTheme = {
      ...this.appTheme,
      colors: {
        ...this.appTheme.colors,
        primary: color
      }
    }
  }


  @action.bound
  changeTabs(index: number): Array<AppTabBarModel> {
    // 直接在原数组的基础上修改内部多层嵌套的一个对象的状态，很难被发现从而产生后续动作
    // 最简单的方式使用ES6语法返回一个新的数组即可达到state change的效果。这里还可以使用immutable.js
    // this.appTabs[index].show = !this.appTabs[index].show
    return this.appTabs = this.appTabs.map(
      (item, i) =>
        i === index
          ? { ...item, show: !item.show }
          : item
    )
  }

}

const app = new AppStore()

export {
  app,
  AppStore
}

