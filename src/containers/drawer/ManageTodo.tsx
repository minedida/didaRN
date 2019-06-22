import React from 'react'
import { View, Text } from 'react-native'
import { NavigationBar } from "../../components/";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CommonList from "./CommonList";
import SmartList from "./SmartList";
import Label from "./Label";
import { material } from "react-native-typography";

class ManageTodo extends React.PureComponent {
  state = {
    index: 0,
    routes: [
      { key: 'CommonList', title: '普通清单' },
      { key: 'SmartList', title: '智能清单' },
      { key: 'Label', title: '标签' },
    ],
  };
  render() {
    const Scenes = SceneMap({
      CommonList,
      SmartList,
      Label,
    })

    const Tab = props =>
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#6071e2' }}
        style={{ backgroundColor: '#fff' }}
        pressColor={'rgba(0, 0, 0, .2)'}
        renderLabel={props =>
          <Text style={material.subheading}>
            {props.route.title}
          </Text>
        }
      />

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'管理清单和标签'}/>
        <TabView
          navigationState={this.state}
          renderScene={Scenes}
          onIndexChange={index => this.setState({ index })}
          renderTabBar={Tab}
        />
      </View>
    )
  }
}

export default ManageTodo
