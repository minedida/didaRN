import React from 'react'
import SideMenu from 'react-native-side-menu'
import stores from "../../store";
import DrawerPanel from "../../containers/Drawer/DrawerPanel";

export function addDrawer(WrappedComponent: any) {
  return class AddDrawerHOC extends React.Component {
    render() {
      const {
        drawer: {
          showDrawer, onMenuItemSelected,
          onMenuStateChange, disableGestures
        } } = stores
      const menu = <DrawerPanel onItemSelected={onMenuItemSelected}/>
      return (
        <SideMenu
          disableGestures={disableGestures}
          menu={menu}
          isOpen={showDrawer}
          onChange={onMenuStateChange}
          bounceBackOnOverdraw={false}
        >
          <WrappedComponent/>
        </SideMenu>
      )
    }
  }
}
