import React from 'react'
import { View, StyleSheet, Text, Animated } from 'react-native'
import { observer, inject } from "mobx-react";
import { TextInput, Button } from "react-native-paper";
import { material } from "react-native-typography";
import { NavigationPops } from "../../navigation/utils";
import { ButtonContainer, NavigationBar, Space } from "../../components/";
import { d } from "../../helper/utils/ScreenUtil";
import { AuthStore } from "../../store/AuthStore";
import { DeviceSize } from "../../helper/constant/DeviceConstants";
const { device_width } = DeviceSize

const Input = ({ placeholder, value, onChangeText, ...props }) =>
  <View
    style={{ width: d(260) }}
  >
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

const AccountView = ({
  data,
  transform,
  onPress = (_type: any) => {}
}: {
  data: AuthStore,
  transform: any,
  onPress: any,
}) => {
  const {
    loginMail, loginMailPwd,
    setLoginMail, setLoginMailPwd
  } = data
  return (
    <Animated.View
      style={[
        { alignItems: 'center', width: device_width },
        transform
      ]}
    >
      <Space height={d(32)}/>

      <Input
        placeholder={'邮箱'}
        value={loginMail}
        onChangeText={setLoginMail}
      />

      <Input
        placeholder={'密码：6~64字符'}
        value={loginMailPwd}
        onChangeText={setLoginMailPwd}
        secureTextEntry={true}
      />

      <Space height={d(18)}/>
      <Button
        dark
        style={styles.button}
        mode="contained"
        onPress={() => {}}
      >
        创建账户
      </Button>

      <Space height={d(10)}/>
      <Button
        style={[
          styles.button,
          { backgroundColor: '#fff' }
        ]}
        mode="text"
        onPress={() => onPress('create')}
      >
        我已有账户
      </Button>
    </Animated.View>
  )
}
const LoginView = ({
  data,
  transform,
  onPress = (_type: any) => {}
}: {
  data: AuthStore,
  transform: any,
  onPress: any,
}) => {
  const {
    loginMail, loginMailPwd,
    setLoginMail, setLoginMailPwd
  } = data
  return (
    <Animated.View
      style={[
        { alignItems: 'center', width: device_width },
        transform
      ]}>
      <Space height={d(32)}/>

      <Input
        autoFocus
        placeholder={'邮箱'}
        value={loginMail}
        onChangeText={setLoginMail}
      />

      <Input
        placeholder={'密码'}
        value={loginMailPwd}
        onChangeText={setLoginMailPwd}
        secureTextEntry={true}
      />

      <Space height={d(18)}/>
      <Button
        dark
        style={styles.button}
        mode="contained"
      >
        登录
      </Button>

      <Space height={d(12)}/>
      <View
        style={{
          width: d(260),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <ButtonContainer
          style={{ padding: d(4) }}
        >
          <Text
            style={[
              material.button,
              { color: '#a2a2a2' }
              ]}
          >
            忘记密码
          </Text>
        </ButtonContainer>
        <ButtonContainer
          onPress={() => onPress('login')}
          style={{ padding: d(4) }}
        >
          <Text
            style={[
              material.button,
              { color: '#a2a2a2' }
            ]}
          >
            创建账户
          </Text>
        </ButtonContainer>
      </View>
    </Animated.View>
  )
}
type Props = {
  navigation: NavigationPops
  auth: AuthStore
}
type State = {
  animation: Animated.Value
}

@inject('auth')
@observer
class MailAuth extends React.Component<Props, State> {
  transform: any
  animation: any

  constructor(props) {
    super(props)
    this.animation = new Animated.Value(0)
    this.transform = {
      transform: [{
        translateX: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-device_width, 0]
        })
      }]
    }
    this.onPress = this.onPress.bind(this)
  }

  onPress(fromType: 'create' | 'login') {
    const config = {
      toValue: fromType === 'create' ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    };
    Animated.timing(this.animation, config).start()
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#fff' }}
      >
        <NavigationBar
          title={'邮箱账户'}
        />
        <View
          style={{ flex: 1, flexDirection: 'row' }}
        >
          <AccountView
            data={this.props.auth}
            transform={this.transform}
            onPress={this.onPress}
          />
          <LoginView
            data={this.props.auth}
            transform={this.transform}
            onPress={this.onPress}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: d(260),
    borderRadius: d(6)
  }
})
export default MailAuth
