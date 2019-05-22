import React, {Component} from 'react'
import stores from './store'
import {Provider} from "mobx-react";
import Child from "./Child";

// how to typesafe inject store? https://github.com/mobxjs/mobx/issues/1778
export default class App extends Component{
  render() {
    return <Provider {...stores}>
      <Child/>
    </Provider>
  }
}

