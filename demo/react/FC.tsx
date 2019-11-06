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

export default ButtonContainer


let { a: newName1 } = window as any;
console.log(newName1);

let {a: newName2 }: {a: string} = window as any;
console.log(newName2)


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare (config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let squareOptions = { colour: 'red', width: 100 }

createSquare(squareOptions)


interface NumberDictionary {
  [name: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

