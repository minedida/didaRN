import { action, observable } from 'mobx'
import { navigate } from "../navigation";

export type DrawerItems = 'InboxTodo' |
  'TodayTodo' | 'AddTodo' | 'ManageTodo'

class DrawerStore {
  @observable showDrawer: boolean = false
  @observable selectedItem: DrawerItems = 'InboxTodo'
  @observable disableGestures: boolean = true
  @observable bounceBackOnOverdraw: boolean = false


  @action.bound
  onMenuStateChange(isOpen: boolean) {
    this.showDrawer = isOpen
  }

  @action.bound
  onMenuItemSelected(item: DrawerItems) {
    this.showDrawer = false
    if (item === 'AddTodo' || item === 'ManageTodo'){
      navigate(item)
      return
    }
    //todo 这里需要改进抽屉切换动画
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
