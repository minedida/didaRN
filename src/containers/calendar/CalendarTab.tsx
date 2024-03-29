import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Agenda} from 'react-native-calendars';
import { NavigationBar } from "../../components/";
import { d } from "../../helper/utils/ScreenUtil";
import { CalendarTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: d(5),
    padding: d(10),
    marginRight: d(10),
    marginTop: d(17)
  },
  emptyDate: {
    height: d(15),
    flex: 1,
    paddingTop: d(30)
  }
});

class CalendarTab extends React.PureComponent {
  static navigationOptions = CalendarTabNavigationOptions

  state = {
    items: {}
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <NavigationBar
          leftButton={null}
          title={'CalendarTab'}
        />
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2017-05-16'}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}

          // markingType={'period'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
          // monthFormat={'yyyy'}
          // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
      </View>
    )
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(
                50,
                Math.floor(Math.random() * 150)
              )
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(
        key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem = (item) =>
    <View
      style={[styles.item, { height: item.height }]}
    >
      <Text>
        {item.name}
      </Text>
    </View>

  renderEmptyDate() {
    return (
      <View
        style={styles.emptyDate}
      >
        <Text>
          This is empty date!
        </Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

export default CalendarTab
