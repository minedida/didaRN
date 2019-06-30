import { action, computed, observable } from 'mobx'
import { navigate } from "../navigation";
import { app } from "./AppStore";

export type DrawerItems = 'InboxTodo' |
  'TodayTodo' | 'AddTodo' | 'ManageTodo'| 'IconsPreview'

class DrawerStore {
  @observable showDrawer: boolean = false
  @observable selectedItem: DrawerItems = 'InboxTodo'
  @observable bounceBackOnOverdraw: boolean = false

  timer: any


  @computed get disableGestures() : boolean {
    return 'TodoTab' !== app.currentScreen
  }

  @action.bound
  onMenuStateChange(isOpen: boolean) {
    this.showDrawer = isOpen
  }

  @action.bound
  onMenuItemSelected(item: DrawerItems) {
    this.showDrawer = false
    if (item === 'AddTodo' || item === 'ManageTodo'){
      this.timer = setTimeout(() => navigate(item), 250)
      return
    }
    //todo 这里需要改进抽屉切换动画
    // 目前有两种改进方案：
    //  1。在跳转前加200毫秒左右的延时，类似twitter
    //  2。在跳转前，用无动画的方式收回抽屉
    this.selectedItem = item

  }

  @action.bound
  toggleMenu() {
    this.showDrawer = !this.showDrawer
  }

}

const drawer = new DrawerStore()
export {
  drawer,
  DrawerStore
}
