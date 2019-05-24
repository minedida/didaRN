import React from 'react'
import { View, Text } from 'react-native'
import { NavigationPops } from "../navigation/utils";

type Props = {
  navigation: NavigationPops
}

class Splash extends React.PureComponent<Props, {}> {
  timer: any
  constructor(props) {
    super(props)
    this.goNext = this.goNext.bind(this)
  }
  componentDidMount(): void {
    // const random = Math.random() * 10 + 1 > 5
    // this.goNext(random ? 'Auth' : 'App')
    this.goNext('Auth')
  }

  goNext(routeName: string) {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate(routeName)
    }, 1000)
  }
  componentWillUnmount(): void {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellowgreen' }}>
        <Text>
          Splash
        </Text>
      </View>
    )
  }
}

export default Splash
