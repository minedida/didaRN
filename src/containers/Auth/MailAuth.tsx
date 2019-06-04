import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationPops } from "../../navigation/utils";
import { ButtonContainer, NavigationBar, Space } from "../../components/";
import { TextInput, Button } from "react-native-paper";
import { d } from "../../helper/utils/ScreenUtil";
import { observer, inject } from "mobx-react";
import { AuthStore } from "../../store/AuthStore";
import { material } from "react-native-typography";

type Props = {
  navigation: NavigationPops
  auth: AuthStore
}
const styles = StyleSheet.create({
  button: {
    // backgroundColor: '#607edf',
    width: d(260),
    borderRadius: d(6)
  }
})

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


@inject('auth')
@observer
class MailAuth extends React.Component<Props> {
  state = {
    showView: 1
  }

  renderCreateAccountView() {
    const {
      auth: {
        loginMail, loginMailPwd,
        setLoginMail, setLoginMailPwd
      }
    } = this.props
    return (
      <View style={{ alignItems: 'center' }}>
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
                mode="text" onPress={() => this.setState({ showView: 1 })}>
          我已有账户
        </Button>
      </View>
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
      <View style={{ alignItems: 'center' }}>
        <Space height={d(32)}/>

        <Input placeholder={'邮箱'} value={loginMail} autoFocus
               onChangeText={setLoginMail}/>

        <Input placeholder={'密码'} value={loginMailPwd}
               onChangeText={setLoginMailPwd} secureTextEntry={true}/>

        <Space height={d(18)}/>
        <Button style={styles.button}  mode="contained" dark
                onPress={() => console.log('Pressed')}>
          登录
        </Button>

        <Space height={d(12)}/>
        <View style={{ width: d(260), flexDirection: 'row', justifyContent: 'space-between' }}>
          <ButtonContainer style={{ padding: d(4) }}>
            <Text style={[material.button, { color: '#a2a2a2' }]}>忘记密码</Text>
          </ButtonContainer>
          <ButtonContainer onPress={() => this.setState({ showView: 2 })} style={{ padding: d(4) }}>
            <Text style={[material.button, { color: '#a2a2a2' }]}>创建账户</Text>
          </ButtonContainer>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={'邮箱账户'}/>
        {this.state.showView === 1 ? this.renderLoginView() : this.renderCreateAccountView()}
      </View>
    )
  }
}

export default MailAuth
