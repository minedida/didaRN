import React from 'react'
import {Switch as PaperSwitch, SwitchProps, withTheme, Theme} from 'react-native-paper'

interface ISwitchProps extends SwitchProps{
  theme: Theme
}
// 将switch的主题色由原本paper自带的`accent`改为`primary`
const Switch = (props: ISwitchProps) =>
  <PaperSwitch {...props} color={props.theme.colors.primary}/>

export default withTheme(Switch)
