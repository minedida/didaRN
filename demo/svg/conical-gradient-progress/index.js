import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AnimatedCircularProgress from 'react-native-conical-gradient-progress';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fill: 60 };
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.box}>
          <AnimatedCircularProgress
            size={107 * 2}
            width={10 * 2}
            fill={this.state.fill}
            prefill={100}
            beginColor="#ff0000"
            endColor="#0000ff"
            segments={16}
            backgroundColor="rgba(255, 255, 255, 0.2)"
            linecap="round"
          >
            {fill => (
              <View style={style.titleBox}>
                <Text style={style.title}>
                  16 segments{'\n'}
                  {fill.toFixed(0)}%`
                </Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>
        <View style={style.box}>
          <AnimatedCircularProgress
            size={107 * 2}
            width={10 * 2}
            fill={this.state.fill}
            segments={16}
            prefill={100}
            beginColor="#A9E5BE"
            endColor="#ffffff"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            linecap="round"
          >
            {fill => (
              <View style={style.titleBox}>
                <Text style={style.title}>
                  16 segments{'\n'}
                  {fill.toFixed(0)}%
                </Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>
        <TouchableOpacity onPress={() => this.setState({ fill: this.state.fill - 20 })}>
          <Text>Touch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ fill: 100 })}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ fill: 100 * Math.random() })}>
          <Text>Random</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4FC87A',
  },
  titleBox: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
  box: {
    margin: 10,
  },
});
