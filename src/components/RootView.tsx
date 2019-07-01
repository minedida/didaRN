import React from 'react'
import { Portal } from "react-native-paper";
import { d } from "../helper/utils/ScreenUtil";
import { inject, observer } from "mobx-react";
import { AppStore } from "../store/AppStore";
import { FabGroup } from "./paper/Fab";

type Props = {
  app?: AppStore
}

@inject('app') @observer
class RootView extends React.Component<Props> {
  state = {
    open: false
  }
  render() {
    return <Portal>
      <FabGroup
        color={'#fff'}
        visible={this.props.app!.fabVisible}
        fabStyle={{marginBottom: d(56)}}
        open={this.state.open}
        icon={this.state.open ? 'today' : 'add'}
        actions={[
          { icon: 'add', onPress: () => console.log('Pressed add') },
          { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},
          { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },
          { icon: 'notifications', label: 'Remind', onPress: () => console.log('Pressed notifications') },
        ]}
        onStateChange={({ open }) => this.setState({ open })}
        onPress={() => {
          if (this.state.open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  }
}

export default RootView
