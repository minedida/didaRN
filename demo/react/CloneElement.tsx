import React from "react";
import { View, Text } from "react-native";

const AloneView = (props) => <Text {...props}>asdasd</Text>

const CloneElement = () => {
  const aloneView1 = React.cloneElement(
    <AloneView />,
    { style: {"fontSize": 30, color: 'cyan'} },
    'hello worasdld');
  const aloneView2 = React.createElement(
    AloneView,
    { style: {"fontSize": 30, color: 'pink'} },
    'hello worasdld');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AloneView/>
      {aloneView1}
      {aloneView2}
    </View>
  )
}

CloneElement.displayname = 'CloneElement';
export default CloneElement;
