import React from 'react'
import { Checkbox as PaperCheckbox, CheckboxProps, withTheme, Theme } from 'react-native-paper'

interface ICheckboxProps extends CheckboxProps {
  theme: Theme
}

// 将Checkbox的主题色由原本paper自带的`accent`改为`primary`
const Checkbox = withTheme((props: ICheckboxProps) =>
  <PaperCheckbox {...props} color={props.theme.colors.primary}/>
)

export default Checkbox
