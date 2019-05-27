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
export const TodoNavigationOptions = (_navigationOptionsParams : NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <IoniconsIcon color={params.tintColor} name={'md-checkbox'} size={t(26)}/>
  }
}
export const CalendarNavigationOptions = (_navigationOptionsParams : NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <EntypoIcon color={params.tintColor} name={'calendar'} size={t(26)}/>
  }
}
export const SettingNavigationOptions = (_navigationOptionsParams : NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <IoniconsIcon color={params.tintColor} name={'md-settings'} size={t(26)}/>
  }
}
