import { action, observable } from 'mobx'
import { replacePrevious } from "../navigation";

class DrawerStore {
  @observable showDrawer: boolean = false
  @observable selectedItem: any = ''
  @observable disableGestures: boolean = true
  @observable bounceBackOnOverdraw: boolean = false


  @action.bound
  onMenuStateChange(isOpen: boolean) {
    this.showDrawer = isOpen
  }

  @action.bound
  onMenuItemSelected(item: any) {
    this.showDrawer = false
    this.selectedItem = item
    replacePrevious(item)
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
