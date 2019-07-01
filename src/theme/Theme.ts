import { DefaultTheme } from "react-native-paper";

// more properties ref https://callstack.github.io/react-native-paper/theming.html

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#607edf',
    accent: '#607edf',
    placeholder: '#c3c3c3'
  }
}

// @ts-ignore
const blueThemeLight = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#607edf',
    accent: '#6071e2',
    placeholder: '#c3c3c3'
  }
}
// @ts-ignore
const blueThemeDark = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6071e2',
    accent: '#6071e2',
    placeholder: '#c3c3c3'
  }
}

export default theme
