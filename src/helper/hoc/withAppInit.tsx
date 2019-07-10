import React from 'react'
import { NetInfo } from "react-native";
import stores from '../../store'

export default function withAppInit(WrappedComponent: any) {
  return class extends React.Component {

    async componentDidMount() {
      const result = await NetInfo.isConnected.fetch()
      stores.app.setNetworkConnected(result)

      NetInfo.addEventListener("connectionChange", this.handleConnectionChange)
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener(
        "connectionChange",
        this.handleConnectionChange
      )
    }

    handleConnectionChange = async _connectionInfo => {
      const result = await NetInfo.isConnected.fetch()
      stores.app.setNetworkConnected(result)
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}
