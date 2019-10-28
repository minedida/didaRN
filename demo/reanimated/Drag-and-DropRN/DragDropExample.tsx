import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack";
import { useScreens } from 'react-native-screens'
import Main from './src/scenes/Main';
useScreens();

const Scenes = {
  Main,
}

const config = {
  headerMode: 'none',
} as any

const Navigator = createStackNavigator(Scenes, config) as any;

export default createAppContainer(Navigator)
