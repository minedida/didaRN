
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Platform,
} from 'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import {BlurView} from '@react-native-community/blur';
import {KeyboardAccessoryView, KeyboardUtils} from 'react-native-keyboard-input';
import './demoKeyboards';


const IsIOS = Platform.OS === 'ios';
const TrackInteractive = true;
/**
 * keyboard-input的问题：
 * 1。iOS和安卓方法回调不统一
 * 2。安卓下，先点击show1，再点击action没有反应，此时也没有处理返回键
 * 3。iOS下，先点击show1出现的视图，和先弹出键盘再点击show1出现的视图，高度上不一致
 */
export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.keyboardAccessoryViewContent = this.keyboardAccessoryViewContent.bind(this);
    this.onKeyboardItemSelected = this.onKeyboardItemSelected.bind(this);
    this.resetKeyboardView = this.resetKeyboardView.bind(this);
    this.onKeyboardResigned = this.onKeyboardResigned.bind(this);

    this.state = {
      customKeyboard: {
        component: undefined,
        initialProps: undefined,
      },
      receivedKeyboardData: undefined,
    };
  }

  onKeyboardItemSelected(keyboardId, params) {
    const receivedKeyboardData = `onItemSelected from "${keyboardId}"\nreceived params: ${JSON.stringify(params)}`;
    this.setState({receivedKeyboardData});
  }

  getToolbarButtons() {
    return [
      {
        text: 'show1',
        testID: 'show1',
        onPress: () => this.showKeyboardView('KeyboardView', 'FIRST - 1 (passed prop)'),
      },
      {
        text: 'show2',
        testID: 'show2',
        onPress: () => this.showKeyboardView('AnotherKeyboardView', 'SECOND - 2 (passed prop)'),
      },
      {
        text: 'reset',
        testID: 'reset',
        onPress: () => this.resetKeyboardView(),
      },
    ];
  }

  resetKeyboardView() {
    this.setState({customKeyboard: {}});
  }

  onKeyboardResigned() {
    alert('onKeyboardResigned')
    this.resetKeyboardView();
  }

  showKeyboardView(component, title) {
    this.setState({
      customKeyboard: {
        component,
        initialProps: {title},
      },
    });
  }

  keyboardAccessoryViewContent() {
    const InnerContainerComponent = (IsIOS && BlurView) ? BlurView : View;
    return (
      <InnerContainerComponent blurType="xlight" style={styles.blurContainer}>
        <View style={{borderTopWidth: StyleSheet.hairlineWidth, borderColor: '#bbb'}}/>

        <View style={styles.inputContainer}>
          <AutoGrowingTextInput
            maxHeight={200}
            style={styles.textInput}
            ref={(r) => {
              this.textInputRef = r;
            }}
            placeholder={'Message'}
            underlineColorAndroid="transparent"
            onFocus={() => this.resetKeyboardView()}
            testID={'input'}
          />
          <TouchableOpacity style={styles.sendButton} onPress={() => KeyboardUtils.dismiss()}>
            <Text>Action</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          {
            this.getToolbarButtons().map((button, index) =>
              <TouchableOpacity onPress={button.onPress} style={{paddingLeft: 15, paddingBottom: 10}} key={index} testID={button.testID}>
                <Text>{button.text}</Text>
              </TouchableOpacity>)
          }
        </View>
      </InnerContainerComponent>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardDismissMode={TrackInteractive ? 'interactive' : 'none'}
        >
          <Text style={styles.welcome}>{this.props.message ? this.props.message : 'Keyboards example'}</Text>
          <Text testID={'demo-message'}>{this.state.receivedKeyboardData}</Text>
        </ScrollView>

        <KeyboardAccessoryView
          renderContent={this.keyboardAccessoryViewContent}
          onHeightChanged={IsIOS ? height => this.setState({keyboardAccessoryViewHeight: height}) : undefined}
          trackInteractive={TrackInteractive}
          kbInputRef={this.textInputRef}
          kbComponent={this.state.customKeyboard.component}
          kbInitialProps={this.state.customKeyboard.initialProps}
          onItemSelected={this.onKeyboardItemSelected}
          onKeyboardResigned={this.onKeyboardResigned}
          revealKeyboardInteractive
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollContainer: {
    justifyContent: 'center',
    padding: 15,
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 50,
    paddingBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  blurContainer: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
    }),
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 5,
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 0.5 / PixelRatio.get(),
    borderRadius: 18,
  },
  sendButton: {
    paddingRight: 15,
    paddingLeft: 15,
    alignSelf: 'center',
  },
});
