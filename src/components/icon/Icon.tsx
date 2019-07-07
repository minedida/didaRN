import React from 'react';
import {
  TouchableNativeFeedback,
  View, ViewStyle, ViewProps, StyleSheet
} from 'react-native';

import getIconType from './getIconType';
import { ButtonContainer } from '../'
import { d } from "../../helper/utils/ScreenUtil";

interface IconProps extends ViewProps {
  type?:
    'Zocial' | 'Octicons' | 'MaterialIcons' | 'MaterialCommunityIcons' |
    'Ionicons' | 'AntDesign' | 'Foundation' | 'EvilIcons' | 'Entypo' |
    'FontAwesome' | 'SimpleLineIcons' | 'Feather' | 'FontAwesome5'
  name: string
  size: number
  color?: string
  onPress?: Function
  style?: ViewStyle
  ref?: Function
  scale?: number
}

const styles = StyleSheet.create({
  anchorView: {
    backgroundColor: 'transparent',
    width: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    ...StyleSheet.absoluteFillObject,
    top: -d(8)
  }
})

// how to pass ref as props:
// https://stackoverflow.com/questions/37647061/how-do-i-access-refs-of-a-child-component-in-the-parent-component

const Icon = React.forwardRef(
  (props: IconProps, ref?: any) => {
    const {
      type,
      name,
      size,
      color,
      onPress,
      style,
      scale = 1.2
    } = props;
    const IconComponent = getIconType(type);
    const Component = onPress ? ButtonContainer : View as any
    const ComponentProps = onPress ?
      { background: TouchableNativeFeedback.SelectableBackgroundBorderless() } : {}
    const containerStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      width: size * scale,
      height: size * scale,
    } as any
    return (
      <Component style={[containerStyle, style]} onPress={onPress} {...ComponentProps}>
        <IconComponent
          style={{position: 'relative'}}
          testID="iconIcon"
          size={size}
          name={name}
          color={color}/>
        {/* We need this view as an anchor for drop down menu. findNodeHandle can
            find just view with width and height, even it needs backgroundColor
            ref: react-native-material-ui/src/Toolbar/RightElement.react.js line.186
        */}

        <View ref={ref} style={styles.anchorView}>
        </View>
      </Component>
    )
  }
)


export default Icon
