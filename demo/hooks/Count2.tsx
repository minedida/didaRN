import React, { useState, useEffect } from 'react'
import { View, Text, Button, NetInfo } from 'react-native'

function Count2() {
  const [count, setCount] = useState(0);
  const [isConnected, setConnected] = useState(false);

  // https://stackoverflow.com/questions/54601074/react-hooks-vs-eventlistener
  useEffect(() =>
  {
    NetInfo.isConnected.fetch()
      .then(result => setConnected(result))

    const handleConnectionChange = async () => {
      const result = await NetInfo.isConnected.fetch()
      setConnected(result)
    }

    NetInfo.addEventListener("connectionChange", handleConnectionChange)

    // clean up
    return () => {
      NetInfo.isConnected.removeEventListener("connectionChange", handleConnectionChange)
    }
    /*return function cleanup() {
        NetInfo.isConnected.removeEventListener("connectionChange", handleConnectionChange)
    }*/
  }, []) // empty array => run only once

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count:{count}</Text>
      <Button title={'增加'} onPress={increase}/>
      <Button title={'减少'} onPress={decrease}/>
      <Text>isConnected:{JSON.stringify(isConnected)}</Text>

    </View>
  )
}

export default Count2
