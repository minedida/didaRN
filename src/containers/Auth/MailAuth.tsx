import React from 'react'
import { View, StyleSheet, Text, Animated } from 'react-native'
import { NavigationPops } from "../../navigation/utils";
import { ButtonContainer, NavigationBar, Space } from "../../components/";
import { TextInput, Button } from "react-native-paper";
import { d } from "../../helper/utils/ScreenUtil";
import { observer, inject } from "mobx-react";
import { AuthStore } from "../../store/AuthStore";
import { material } from "react-native-typography";
import DeviceConstants from "../../helper/constant/DeviceConstants";

const { DeviceWidth } = DeviceConstants
const Input = ({ placeholder, value, onChangeText, ...props }) =>
  <View style={{ width: d(260) }}>
    <TextInput
      selectionColor={'#5b6de5'}
      underlineColor={'#f0f0f0'}
      style={{ backgroundColor: '#fff' }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  </View>


const styles = StyleSheet.create({
  button: {
    width: d(260),
    borderRadius: d(6)
  }
})
type Props = {
  navigation: NavigationPops
  auth: AuthStore
}
type State = {
  animation: any
}

@inject('auth')
@observer
class MailAuth extends React.Component<Props, State> {

  createViewTransform: any
  loginViewTransform: any

  constructor(props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0)
    }
    // 动画说明：
    // 1。容器横向布局，先布局`创建`视图，再布局`登录`视图。
    //    此时屏幕`创建`视图就在屏幕上正好显示，`登录`视图在创建视图的右边，刚好看不到。
    //    `创建`视图添加初始动画向左移动屏幕距离刚好看不到，`登录`视图向左移动屏幕距离刚好看得到
    // 2。触发动画：
    //    `创建`视图从左边向右移动到自己的原点位置，刚好看得到
    //    `登录`视图从左向右移动到自己的原点位置，刚好看不到
    //
    this.createViewTransform = {
      transform: [{
        translateX: this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-DeviceWidth, 0]
        })
      }]
    }
    this.loginViewTransform = {
      transform: [{
        translateX: this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-DeviceWidth, 0]
        })
      }]
    }
  }

  onPress(fromType: 'create' | 'login') {
    const config = { toValue: fromType === 'create' ? 0 : 1, duration: 300 };
    Animated.timing(this.state.animation, config).start()
  }

  renderCreateAccountView() {
    const {
      auth: {
        loginMail, loginMailPwd,
        setLoginMail, setLoginMailPwd
      }
    } = this.props
    return (
      <Animated.View
        style={[{ alignItems: 'center', width: DeviceWidth }, this.createViewTransform]}>
        <Space height={d(32)}/>

        <Input placeholder={'邮箱'} value={loginMail}
               onChangeText={setLoginMail}/>

        <Input placeholder={'密码：6~64字符'} value={loginMailPwd}
               onChangeText={setLoginMailPwd} secureTextEntry={true}/>

        <Space height={d(18)}/>
        <Button style={styles.button} dark={true} mode="contained"
                onPress={() => console.log('Pressed')}>
          创建账户
        </Button>

        <Space height={d(10)}/>
        <Button style={[styles.button, { backgroundColor: '#fff' }]}
                mode="text" onPress={() => this.onPress('create')}>
          我已有账户
        </Button>
      </Animated.View>
    )
  }

  renderLoginView() {
    const {
      auth: {
        loginMail, loginMailPwd,
        setLoginMail, setLoginMailPwd
      }
    } = this.props
    return (
      <Animated.View
        style={[{ alignItems: 'center', width: DeviceWidth }, this.loginViewTransform]}>
        <Space height={d(32)}/>

        <Input placeholder={'邮箱'} value={loginMail} autoFocus
               onChangeText={setLoginMail}/>

        <Input placeholder={'密码'} value={loginMailPwd}
               onChangeText={setLoginMailPwd} secureTextEntry={true}/>

        <Space height={d(18)}/>
        <Button style={styles.button} mode="contained" dark>
          登录
        </Button>

        <Space height={d(12)}/>
        <View style={{ width: d(260), flexDirection: 'row', justifyContent: 'space-between' }}>
          <ButtonContainer style={{ padding: d(4) }}>
            <Text style={[material.button, { color: '#a2a2a2' }]}>忘记密码</Text>
          </ButtonContainer>
          <ButtonContainer onPress={() => this.onPress('login')} style={{ padding: d(4) }}>
            <Text style={[material.button, { color: '#a2a2a2' }]}>创建账户</Text>
          </ButtonContainer>
        </View>
      </Animated.View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={'邮箱账户'}/>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {this.renderCreateAccountView()}
          {this.renderLoginView()}
        </View>
      </View>
    )
  }
}

export default MailAuth
