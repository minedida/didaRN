import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// ScrollView必须有一个确定的高度才能正常工作，否则会导致无法正常滚动

const Item = ({ index }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 40, width: '100%', backgroundColor: index % 2 ? 'yellow' : 'pink' }}>
    <Text>{index}</Text>
  </View>
);
const MapView = () => [...Array(100)].map((item, index) => <Item key={index.toString()} index={index} />);

const ScollViewDemo11 = () => (
  <ScrollView style={{ flex: 1 }} contentContainerStyle={{ height: 2000 }}>
    <MapView />
  </ScrollView>
);
const ScollViewDemo12 = () => (
  <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ height: 200 }}>
      <MapView />
    </ScrollView>
  </View>
);
// --------------------------------------------------------------------------------
// nestedScrollEnabled

const ScollViewDemo13 = () => (
  <ScrollView>
    <MapView />
    <ScrollView nestedScrollEnabled={false}>
      <MapView />
    </ScrollView>
  </ScrollView>
);
const ScollViewDemo14 = () => (
  <ScrollView>
    <View style={{ height: 600, backgroundColor: 'violet' }} />
    <View style={{ height: 1000, backgroundColor: '#fff' }}>
      <ScrollView style={{ margin: 30 }} nestedScrollEnabled>
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
export default ScollViewDemo11;
