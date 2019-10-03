// import React from 'react';
import {
  Dimensions, Platform
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import AppTabBar from "./AppTabBar";
import DrawerPanel from "../containers/drawer/DrawerPanel";

// const Screen1 = () => {
//   Toast.show('Screen1')
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text onPress={() => openDrawer()}>Screen1</Text>
//   </View>
//   )
// }
// const Screen2 = () => {
//   Toast.show('Screen2')
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Screen2</Text>
//   </View>
//   )
// }
// const CustomDrawerContentComponent = (props) => {
//   let { items } = props
//
//
//   items.onItemPress = () => {
//     console.log('抽屉点击了啊啊啊')
//   }
//   console.log('CustomDrawerContentComponent-props', props)
//   console.log('CustomDrawerContentComponent-DrawerItems', DrawerItems.displayName)
//   return (
//     <ScrollView>
//       <SafeAreaView style={{ flex: 1 }} forceInset={{
//         top: 'always',
//         horizontal: 'never'
//       }}>
//         <DrawerItems {...props} />
//       </SafeAreaView>
//     </ScrollView>
//   )
// }
export default createDrawerNavigator(
  {
    // Screen1,
    // Screen2,
    AppTabBar
  },
  {
    initialRouteName: 'AppTabBar',
    contentComponent: DrawerPanel,
    // contentComponent: CustomDrawerContentComponent,
    drawerWidth: Dimensions.get('window').width * 0.86,
    drawerType: Platform.OS === 'android' ? 'front' : 'slide',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    unmountInactiveRoutes: false // 设置false才能有缓存
  }
);
