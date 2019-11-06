import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  title: string,
}
const ButtonContainer: React.FC<Props> = (props) => {
  const { title } = props
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}
let { a: newName1 } = window as any;
console.log(newName1);

let {a: newName2 }: {a: string} = window as any;
console.log(newName2)

export default ButtonContainer
