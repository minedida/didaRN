import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'
import { inject, observer } from 'mobx-react';
import { CounterStore } from "./store/CounterStore";
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  counter?: CounterStore
}
type State = {
  result: any
}

@inject('counter')
@observer
export default class Child extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      result: ''
    }
    this.proofAxios = this.proofAxios.bind(this)
    this.addGun = this.addGun.bind(this)
    this.removeGun = this.removeGun.bind(this)
  }

  async proofAxios() {
    const data = {
      "type": "password",
      "password": "111111",
      "phone": "13020051580"
    }
    const result: any = await axios.post('http://dev-3.seiue.com:8080/auth/login', data)
    this.setState({ result })
    /*const result = await fetch('http://dev-3.seiue.com:8080/auth/login', {
      method:'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    this.setState({result: await result.json()})*/
  }

  addGun() {
    this.props.counter && this.props.counter.increment()
  }

  removeGun() {
    this.props.counter && this.props.counter.decrement()
  }

  render() {
    // const {counter: {count}} = this.props
    const { counter } = this.props
    const count = counter!.count
    const { result } = this.state

    const showResult = result ? result.data.token_type : null
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>机关枪:{count}把</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title={'加机关枪'} onPress={this.addGun}/>
          <Button title={'减机关枪'} onPress={this.removeGun}/>
        </View>
        <Button title={'登录'} onPress={this.proofAxios}/>
        {/*<Text style={styles.instructions}>{JSON.stringify(this.state.result ? this.state.result.token_type : this.state.result)}</Text>*/}
        <Text
          style={styles.instructions}>{JSON.stringify(showResult)}</Text>
        <Icon name="github" size={30} color="#333"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

