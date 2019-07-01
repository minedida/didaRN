import React from 'react'
import { Toolbar } from 'react-native-material-ui';
import { View } from "react-native";

class ToolbarHeader extends React.Component {
  render() {
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
      <Toolbar
        leftElement="menu"
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
        rightElement={{
          menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
          }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
    </View>
  }
}

export default ToolbarHeader
