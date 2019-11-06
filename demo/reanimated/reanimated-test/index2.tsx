import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';


const {
  event,
  Value,
  Clock,
  lessThan,
  greaterThan,
  divide,
  diff,
  abs,
  startClock,
  stopClock,
  cond,
  add,
  multiply,
  eq,
  set,
  sub,
  onChange,
  call,
  debug,
} = Animated;
function interaction(gestureTranslation, gestureState) {
  const dragging = new Value(0);
  const start = new Value(0);
  const position = new Value(0);
  const res = cond(
    eq(gestureState, State.ACTIVE),
    [
      cond(dragging, 0, [set(dragging, 1), set(start, position)]),
      set(position, add(start, gestureTranslation)),
    ],
    [set(dragging, 0), position]
  );
  return res;
}

const VELOCITY_THRESHOLD = 0.5;
const POSITION_THRESHOLD = 0.5;
const VELOCITY = 5;

function interaction2(gestureTranslation, gestureState) {
  const start = new Value(0);
  const position = new Value(0);
  const dragging = new Value(0);
  const velocity = new Value(0);

  const clock = new Clock();
  const dt = divide(diff(clock), 1000);

  return cond(
    eq(gestureState, State.ACTIVE), // 手势激活中
    [
      // 如果dragging -> nothing，否则置dragging为1，同时缓存起点 start = position;
      cond(dragging, 0, [set(dragging, 1), set(start, position)]),
      // 停止时钟动画
      stopClock(clock),
      // 计算时间差
      dt,
      // 设置 position = start + gestureTranslation;
      [set(position, add(start, gestureTranslation))]
    ],
    [ // 手指释放
      // 设置dragging为0
      set(dragging, 0),
      // 开启时钟动画
      startClock(clock),
      // 设置速度的值
      spring(dt, position, velocity, 0),
      cond(lessThan(abs(position), POSITION_THRESHOLD), stopClock(clock)),
      // 设置 position = position + dt * velocity
      set(position, add(position, multiply(dt, velocity))),
    ]
  )
}

function force2(dt, position, velocity) {
  return set(
    velocity,
    cond(
      lessThan(position, -POSITION_THRESHOLD),
      VELOCITY,
      cond(greaterThan(position, POSITION_THRESHOLD), -VELOCITY, 0),
    )
  );
}
function spring(dt, position, velocity, anchor, mass = 10, tension = 300) {
  const dist = sub(position, anchor);
  const acc = divide(multiply(-1, tension, dist), mass);
  return set(velocity, add(velocity, multiply(dt, acc)));
}
class Box extends Component {
  constructor(props) {
    super(props);

    this.gestureX = new Value(0);
    this.state = new Value(-1);

    this._onGestureEvent = event([
      {
        nativeEvent: {
          translationX: this.gestureX,
          state: this.state,
        },
      },
    ]);

    this._transX = interaction(this.gestureX, this.state);
  }
  render() {
    return (
      <>
        {/*<Animated.Code>*/}
        {/*  {*/}
        {/*    // () => call([this.state], ([val]) => console.tron.debug({ val }))*/}
        {/*    () => onChange(this.state, [call([this.state], (v) => console.tron.debug( v ))])*/}
        {/*  }*/}
        {/*</Animated.Code>*/}
        <PanGestureHandler
          onGestureEvent={this._onGestureEvent}
          onHandlerStateChange={this._onGestureEvent}>
          <Animated.View
            style={[
              styles.box,
              {
                transform: [{ translateX: this._transX }],
              },
            ]}
          />
        </PanGestureHandler>
      </>
    );
  }
}

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Box />
      </View>
    );
  }
}

const BOX_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    alignSelf: 'center',
    backgroundColor: 'teal',
    margin: BOX_SIZE / 2,
  },
});
