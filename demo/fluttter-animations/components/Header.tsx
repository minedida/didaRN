// @flow
import * as React from 'react';
import {
  View, StyleSheet, Image, Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type HeaderProps = {
  section: any,
};

const { width } = Dimensions.get('window');

export default class Header extends React.PureComponent<HeaderProps> {
  render() {
    const { section } = this.props;
    const colors = [section.leftColor, section.rightColor];
    return (
      <View style={styles.container}>
        <Image source={section.image} style={styles.image} />
        <LinearGradient
          style={styles.gradient}
          start={{x:0, y:0}}
          end={{x:1, y:0}}
          {...{ colors }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9,
  },
});
