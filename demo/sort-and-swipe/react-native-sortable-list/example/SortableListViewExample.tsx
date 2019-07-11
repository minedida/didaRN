import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import SortableListView from 'react-native-sortable-listview'

let data = [
  { text: 'world' },
  { text: 'are you' },
  { text: 123 },
  { text: 'is' },
  { text: 'a' },
  { text: 'real' },
  { text: 'drag and drop' },
  { text: 'bb' },
  { text: 'cc' },
  { text: 'dd' },
  { text: 'ee' },
  { text: 'ff' },
  { text: 'gg' },
  { text: 'hh' },
  { text: 'ii' },
  { text: 'jj' },
  { text: 'kk' }
]


let order = Object.keys(data) //Array of keys
/*let order = data.reduce((p, c) => {
  p.push(c.text)
  return p
}, [])*/

class RowComponent extends React.Component<any> {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data.text}</Text>
      </TouchableHighlight>
    )
  }
}

class MyComponent extends React.Component {
  render() {
    return (
      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={order}
        onRowMoved={e => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} />}
      />
    )
  }
}

export default MyComponent
