import React from 'react';
import {
  TouchableNativeFeedback,
  View,
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

}

const Icon = (props: Props) => {
  const {
    type,
    name,
    size,
    color,
    onPress,
  } = props;

  const IconComponent = getIconType(type);
  const Component = onPress ? ButtonContainer : View as any
  const ComponentProps = onPress ?
    { background: TouchableNativeFeedback.SelectableBackgroundBorderless() } : {}

  return (
    <Component onPress={onPress} {...ComponentProps}>
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
