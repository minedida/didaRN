import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class NestedDemo1 extends Component {
  render() {
    return (
      <ScrollView nestedScrollEnabled>
        <View style={{ height: 600, backgroundColor: 'violet' }} />

        <View style={{ height: 2000, backgroundColor: 'red' }}>
          <ScrollView nestedScrollEnabled style={{ margin: 10, maxHeight: 200 }}>
            <View style={{ height: 200, backgroundColor: 'blue' }} />
            <View style={{ height: 200, backgroundColor: 'pink' }} />
            <View style={{ height: 200, backgroundColor: 'blue' }} />
            <View style={{ height: 200, backgroundColor: 'pink' }} />
            <View style={{ height: 200, backgroundColor: 'blue' }} />
            <View style={{ height: 200, backgroundColor: 'pink' }} />
            <View style={{ height: 200, backgroundColor: 'blue' }} />
            <View style={{ height: 200, backgroundColor: 'pink' }} />
            <View style={{ height: 200, backgroundColor: 'blue' }} />
            <View style={{ height: 200, backgroundColor: 'pink' }} />
            <View style={{ height: 200, backgroundColor: 'blue' }} />
            <View style={{ height: 200, backgroundColor: 'pink' }} />
          </ScrollView>
        </View>

      </ScrollView>
    );
  }
}

export default NestedDemo1;
