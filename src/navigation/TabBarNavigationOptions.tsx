import React from "react";
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { t } from "../helper/utils/ScreenUtil";

type NavigationOptionsParams = {
  navigation: any
  navigationOptions: any
}
type tabBarIconParams = {
  focused: boolean,
  tintColor: string
}
export const TodoTabNavigationOptions = (_navigationOptionsParams : NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <IoniconsIcon color={params.tintColor} name={'md-checkbox'} size={t(26)}/>
  }
}
export const CalendarTabNavigationOptions = (_navigationOptionsParams : NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <EntypoIcon color={params.tintColor} name={'calendar'} size={t(26)}/>
  }
}
export const SettingTabNavigationOptions = (_navigationOptionsParams : NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <IoniconsIcon color={params.tintColor} name={'md-settings'} size={t(26)}/>
  }
}
