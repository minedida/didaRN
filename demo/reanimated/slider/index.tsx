import React from 'react'
import { View, Text } from 'react-native'
// import { Slider, genSliderStyle1, genSliderStyle2 } from './src'
import { Slider } from './src2/Slider2'


class SliderDemo extends React.Component<any, any> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/*<Slider*/}
        {/*  onIndexChange={value => console.tron.debug( value )}*/}
        {/*  {...genSliderStyle2()}*/}
        {/*/>*/}

        <Slider />

      </View>
    )
  }
}

export default SliderDemo
