import React, { useEffect, useState } from 'react'
import { View, Text, DeviceEventEmitter } from 'react-native'

export const EventTestFunc1 = (props) => {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    this.timmer = setInterval(() => {
      // DeviceEventEmitter.emit('update-listener')
      setCount(prevState => prevState + 1);
      console.tron.debug('effect-inner' )
    }, 800);
    //　在这里，useEffect中的定时器相当于在`Mount`被创建，然后在返回的回调函数中销毁这个定时器就达到在`Unmount`时被销毁
    return () => {
      console.tron.debug('effect-cleanup' )
      this.timmer && clearInterval(this.timmer)
    }
  }, [props.id])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => {
          props.navigation.navigate('EventTestFunc2')
        }}
      >EventTestClass1--{count}</Text>
    </View>
  )
};
export const EventTestFunc2 = () => {
  useEffect(() => {
    DeviceEventEmitter.addListener('update-listener', () => console.tron.debug( 'update-listener' ))
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>EventTestFunc2</Text>
    </View>
  )
}
export class EventTestClass1 extends React.Component<any, any> {
  timmer;
  componentDidMount(): void {
    console.tron.debug( 'componentDidMount' )
    this.timmer = setInterval(() => {
      DeviceEventEmitter.emit('update-listener')
    }, 400);
  }
  componentWillUnmount(): void {
    console.tron.debug( 'componentWillUnmount' )
    this.timmer && clearInterval(this.timmer)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          onPress={() => {
            this.props.navigation.navigate('EventTestClass2')
          }}
        >EventTestClass1</Text>
      </View>
    );
  }
}

export class EventTestClass2 extends React.Component<any, any> {
  componentDidMount(): void {
    DeviceEventEmitter.addListener('update-listener', () => console.tron.debug( 'update-listener' ))
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>EventTestClass2</Text>
      </View>
    );
  }
}

