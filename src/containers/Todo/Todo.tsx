import React from 'react'
import { View, Text } from 'react-native'
import { inject, observer } from "mobx-react";
import { DrawerStore } from "../../store/DrawerStore";
import { IconsPreview, NavigationBar } from "../../components/";
import { TodoNavigationOptions } from "../../navigation/NavigationOptions";

type Props = {
  drawer: DrawerStore
}

@inject('drawer') @observer
class Todo extends React.Component<Props> {
  static navigationOptions = TodoNavigationOptions;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar leftButton={null} title={'todo'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text onPress={this.props.drawer.toggleMenu}>
            Todo
          </Text>
          <IconsPreview/>
        </View>
      </View>
    )
  }
}

export default Todo
