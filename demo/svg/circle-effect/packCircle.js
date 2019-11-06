import React from 'react';
import Svg, {
  Circle,
} from 'react-native-svg';


class PackCircle extends React.Component {
  render() {
    // console.tron.debug( this.props.fill );
    const radius = this.props.fill * 20 + 30;
    const cx = (radius - 1) * Math.sin(2 * Math.PI * this.props.fill - Math.PI) + 50;
    const cy = (radius - 1) * Math.cos(2 * Math.PI * this.props.fill - Math.PI) + 50;
    return (
      <Svg height="200" width="200" viewBox="0 0 100 100" style={{ position: 'absolute' }}>
        <Circle
          cx={50}
          cy={50}
          r={radius}
          stroke="blue"
          strokeWidth=".2"
          fill="transparent"
          opacity={this.props.opacity}
        />
        <Circle
          cx={cx}
          cy={cy}
          r={2}
          stroke="blue"
          strokeWidth=".2"
          opacity={this.props.opacity}
        />
      </Svg>
    );
  }
}

export default PackCircle;
