import React from 'react'
import { inject, observer } from "mobx-react";
import { View, Text, StyleSheet, Platform } from 'react-native'
import { KeyboardAccessoryView } from 'react-native-keyboard-input';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import '../../demo/keyboard-input/demoKeyboards'
import { AppStore } from "../store/AppStore";
import { d, t } from "../helper/utils/ScreenUtil";
import { ButtonContainer, Icon, Toast } from "./index";


const IsIOS = Platform.OS === 'ios';
const TrackInteractive = true;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: d(6),
    borderTopRightRadius: d(6),
  },
  blurContainer: {
    ...Platform.select({
      ios: {
        flex: 1,
      }
    })
  },
  textInput: {
    flex: 1,
    marginLeft: d(6),
    marginTop: d(6),
    marginBottom: d(6),
    paddingLeft: d(6),
    fontSize: t(15),
    backgroundColor: 'white',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: d(8)
  },
  toolView: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    // justifyContent: 'space-between',
    paddingHorizontal: d(6)
  }
});

type Props = {
  fabOpen: boolean
  app?: AppStore
}

const InputIcon = (props: any) =>
  <Icon style={styles.iconView} color={'#787878'}size={t(22)} scale={1.8} {...props}/>


//todo contentView 在y轴方向上的动画
@inject('app') @observer
class QuickInput extends React.Component<Props, any> {
  textInputRef: any
  state = {
    customKeyboard: {
      component: undefined
    }
  }

  onToolItemPress(type: string) {
    Toast.show(type)
  }

  renderToolView() {
    return (
      <View style={styles.toolView}>

        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <InputIcon
            onPress={() => this.onToolItemPress('KeyboardView')}
            type={'FontAwesome5'} name={'calendar-alt'} size={t(20)}/>
          <InputIcon
            onPress={() => this.onToolItemPress('priority')}
            type={'MaterialCommunityIcons'} name={'priority-high'}/>

          <InputIcon onPress={() => this.onToolItemPress('tag')}
                type={'AntDesign'}  name={'tag'} size={t(20)}/>

          <ButtonContainer onPress={() => this.onToolItemPress('inbox')} style={[styles.iconView, {flex: 1}]}>
            <InputIcon type={'MaterialCommunityIcons'} name={'inbox'}/>
            <Text>收集箱</Text>
          </ButtonContainer>
        </View>

        <InputIcon onPress={() => this.onToolItemPress('send')}
              type={'MaterialCommunityIcons'} name={'send'}/>

      </View>
    )
  }

  renderKeyboardContent() {
    return (
      <View style={styles.blurContainer}>
        <View style={styles.inputContainer}>
          <AutoGrowingTextInput
            autoFocus
            maxHeight={d(100)}
            style={styles.textInput}
            ref={r => this.textInputRef = r}
            placeholder={'准备做什么?'}
            underlineColorAndroid="transparent"
            // onFocus={() => this.resetKeyboardView()}
            testID={'input'}
          />
        </View>
        {this.renderToolView()}
      </View>
    );
  }

  render() {
    if (!this.props.fabOpen) {
      return null
    }
    return (
      <KeyboardAccessoryView
        revealKeyboardInteractive
        renderContent={() => this.renderKeyboardContent()}
        onHeightChanged={IsIOS ? height => this.setState({ keyboardAccessoryViewHeight: height }) : undefined}
        trackInteractive={TrackInteractive}
        kbInputRef={this.textInputRef}
        // kbComponent={this.state.customKeyboard.component}
        // onItemSelected={this.onKeyboardItemSelected}
        // onKeyboardResigned={this.onKeyboardResigned}
      />
    );
  }
}

export default QuickInput
