import React from 'react'
import { Platform } from "react-native";
import { NavigationPops } from "../navigation/utils";
import SplashScreen from 'react-native-splash-screen'

type Props = {
  navigation: NavigationPops
}
function Splash(props: Props) {
  function goNext(routeName: string) {
    props.navigation.navigate(routeName)
  }
  React.useEffect(() =>
  {
    Platform.OS === 'android' && SplashScreen.hide();
    goNext('App')
  })
  return null
}

/*class Splash extends React.PureComponent<Props, {}> {

  constructor(props) {
    super(props)
    this.goNext = this.goNext.bind(this)
  }

  componentDidMount(): void {
    Platform.OS === 'android' && SplashScreen.hide();
    this.goNext('App')
  }

  goNext(routeName: string) {
    this.props.navigation.navigate(routeName)
  }

  render() {
    return null
  }
}*/

export default Splash
