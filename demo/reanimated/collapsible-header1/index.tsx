import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Animated from "react-native-reanimated";
import { onScroll } from "react-native-redash"
const { call, Value, Code, sub, diffClamp, createAnimatedComponent } = Animated;

const AnimatedFlatList = createAnimatedComponent(FlatList);
const HEADER_HEIGHT = 50;
// https://blog.bam.tech/developer-news/an-introduction-to-react-native-reanimated
const Parent = () => {
  // Create an "y" animated value and pass it down to the children
  const y = new Value(0)

  return (
    <View>
      <Header y={y} />
      <List y={y} />
    </View>
  )
}
Parent.displayName = 'CollapsibleHeader1';
// Parent.navigationOptions = {
//   header: 'none'
// }

const Header = ({ y }) => {
  const dif = diffClamp(y, 0, HEADER_HEIGHT);
  // Animated.useCode(
  //   () => call([dif], (v) => console.tron.debug(v)),[]
  // )
  return (
    <Animated.View
      style={ {
        height: HEADER_HEIGHT,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 2,
        backgroundColor: "#ffb74d",
        justifyContent: "center",
        alignItems: "center",
        /* Translate the View according to y */
        transform: [{ translateY: sub(0, dif) }],
      } }
    >
      <Code>
        {
          () => call([dif], (v) => console.tron.debug(v))
        }
      </Code>
      <Text>Header</Text>
    </Animated.View>
  )
}
const List = ({ y }) => (
  <AnimatedFlatList
    // onScroll={event([{ nativeEvent: { y } }])}
    onScroll={onScroll({y})}
    scrollEventThrottle={16}
    data={new Array(10).fill(1)}
    keyExtractor={(_item, index) => index.toString()}
    renderItem={(v, k) => {
      const bgc = "#"+((1<<24)*Math.random()|0).toString(16);
      return (
        <View
          style={ { width: "100%", height: 200, marginTop: 50, backgroundColor: bgc,
            justifyContent: "center", alignItems: "center", } }
          key={k + ""}
        >
          <Text>test{k}</Text>
        </View>
      )
    }}
  />
)
export default Parent
