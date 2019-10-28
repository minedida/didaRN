import React from 'react'
import { Platform, Keyboard, LayoutAnimation, UIManager } from 'react-native'

// 另一个优雅的处理键盘事件的方法：https://codeburst.io/react-native-keyboard-covering-inputs-72a9d3072689

export default function withKeyboardListener(WrappedComponent: any) {
  return class ListenKeyboardHOC extends React.PureComponent {
    keyboardWillShowSub: any
    keyboardWillHideSub: any

    constructor(props: any) {
      super(props)
      this.state = {
        keyboardShown: false,
      }
      Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    componentWillMount() {
      // https://github.com/facebook/react-native/issues/3468#issuecomment-188146894
      const keyboardShowType =
        Platform.OS === 'android'
          ? 'keyboardDidShow'
          : 'keyboardWillShow'
      const keyboardHideType =
        Platform.OS === 'android'
          ? 'keyboardDidHide'
          : 'keyboardWillHide'
      this.keyboardWillShowSub = Keyboard.addListener(
        keyboardShowType,
        this.keyboardWillShow)
      ;
      this.keyboardWillHideSub = Keyboard.addListener(
        keyboardHideType,
        this.keyboardWillHide
      );
    }

    componentWillUnmount() {
      this.keyboardWillShowSub.remove();
      this.keyboardWillHideSub.remove();
    }

    componentWillUpdate() {
      LayoutAnimation.easeInEaseOut()
    }

    keyboardWillShow = (event: any) => {
      const keyboardHeight = event.endCoordinates.height;
      this.setState({ keyboardShown: true, keyboardHeight })
    };

    keyboardWillHide = (_event: any) => {
      this.setState({ keyboardShown: false })
    };

    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}
