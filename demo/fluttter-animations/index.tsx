import React from 'react';

import { Sections } from './components';

const mariner = '#3B5F8F';
const mediumPurple = '#8266D4';
const tomato = '#F95B57';
const mySin = '#F3A646';

const sections: any = [
  {
    title: 'SUNGLASSES',
    leftColor: mediumPurple,
    rightColor: mariner,
    image: require('./assets/sunnies.png'),
  },
  {
    title: 'FURNITURE',
    leftColor: tomato,
    rightColor: mediumPurple,
    image: require('./assets/table.png'),
  },
  {
    title: 'JEWELRY',
    leftColor: mySin,
    rightColor: tomato,
    image: require('./assets/earrings.png'),
  },
  {
    title: 'HEADWEAR',
    leftColor: 'white',
    rightColor: tomato,
    image: require('./assets/hat.png'),
  },
];

// https://www.youtube.com/watch?v=JkbC9niXfH0
export default class FlutterAnimation extends React.Component<{}> {
  state = {
    ready: false,
  };

  async componentDidMount() {
    // await Promise.all(sections.map(section => Asset.loadAsync(section.image)));
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return null;
    }
    return (
      <Sections {...{ sections }} />
    );
  }
}
