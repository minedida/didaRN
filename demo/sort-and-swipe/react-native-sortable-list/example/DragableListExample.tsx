import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

class DragableListExample extends Component {

  state = {
    data: [...Array(20)].map((_, index) => ({
      key: `item-${index}`,
      label: index,
      backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
    }))
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? 'blue' : item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onLongPress={move}
        onPressOut={moveEnd}
        key={index}
      >
        <Text style={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 32,
        }}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => `draggable-item-${item.key}`}
          scrollPercent={5}
          onMoveEnd={({ data }) => this.setState({ data })}
        />
      </View>
    )
  }
}

export default DragableListExample
