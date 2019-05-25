
import AndroidButtonContainer from './ButtonContainer.android'
import IOSButtonContainer from './ButtonContainer.ios'
import { Platform } from 'react-native';

const Button = Platform.OS === 'ios' ? IOSButtonContainer : AndroidButtonContainer

export default Button
