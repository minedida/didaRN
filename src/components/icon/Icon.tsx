import React from 'react';
import {
  TouchableNativeFeedback,
  View, ViewStyle
} from 'react-native';

import getIconType from './getIconType';
import { ButtonContainer } from '../'

type Props = {
  type?:
    'Zocial' | 'Octicons' | 'MaterialIcons' | 'MaterialCommunityIcons' |
    'Ionicons' | 'AntDesign' | 'Foundation' | 'EvilIcons' | 'Entypo' |
    'FontAwesome' | 'SimpleLineIcons' | 'Feather' | 'FontAwesome5'
  name: string
  size: number
  color?: string
  onPress?: Function
  style?: ViewStyle
}

const Icon = (props: Props) => {
  const {
    type,
    name,
    size,
    color,
    onPress,
    style
  } = props;

  const IconComponent = getIconType(type);
  const Component = onPress ? ButtonContainer : View as any
  const ComponentProps = onPress ?
    { background: TouchableNativeFeedback.SelectableBackgroundBorderless() } : {}
  const containerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: size * 1.2,
    height: size * 1.2
  } as any
  return (
    <Component style={[containerStyle, style]} onPress={onPress} {...ComponentProps}>
      <IconComponent
        testID="iconIcon"
        size={size}
        name={name}
        color={color}
      />
    </Component>
  );
};


export default Icon
