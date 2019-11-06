
import React from 'react';
import { View, Animated } from 'react-native';
import PackCircle from './packCircle';
import {Space} from "../../../src/components/Space";

const AnimatedPackCircle = Animated.createAnimatedComponent(PackCircle);

export default class SvgDemo extends React.Component {
  constructor(props) {
    super(props);
    this.anim = new Animated.Value(0);
    this.animArr = [];
    for (let i = 0; i < 100; i++) {
      this.animArr.push(new Animated.Value(0));
    }
  }

  componentDidMount(): void {
    this.animate();
  }

  animate() {
    // Animated.loop(
    //   Animated.timing(this.anim, {
    //     toValue: 1,
    //     duration: 3000,
    //     // useNativeDriver: true,
    //   }),
    //   {
    //     iterations: -1,
    //   },
    // )
    //   .start();

    this.animArr.forEach(
      (item) => item && item.setValue(0)
    );
    const animations = this.animArr.map(
      (item, index) => Animated.timing(
        item, {
          toValue: 1,
          duration: 2500,
          delay: index * 800,
          // useNativeDriver: true,
        },
      )
    );
    Animated.parallel(animations)
      .start(() => this.animate());
  }
  createOpacityInterpolate(anim) {
    return anim.interpolate({
      inputRange: [0, 0.001, 0.999, 1],
      outputRange: [0, 1, 1, 0],
    });
  }

  render() {
    console.tron.debug( this.anim );
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Space height={200} />
        <View
          style={{
            width: 200,
            height: 200,
          }}
        >
          {
            this.animArr.map((item, index) => (
              <AnimatedPackCircle
                key={index}
                fill={item}
                opacity={this.createOpacityInterpolate(item)}
              />
            ))
          }
        </View>

        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'yellow',
          }}
        />
      </View>
    );
  }
}
