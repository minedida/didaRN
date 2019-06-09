import React from 'react'
import {View, SafeAreaView, Text} from 'react-native'
import {material} from 'react-native-typography'
import {NavigationBar} from "../../src/components";
import CalendarsScreen from './calendars';
import AgendaScreen from './agenda';
import CalendarsList from './calendarsList';
import HorizontalCalendarList from './HorizontalCalendarList';
import ExpandableCalendar from './expandableCalendar';

const arrs = [
  {name: 'CalendarsScreen', cmp: <CalendarsScreen/>},
  {name: 'AgendaScreen', cmp: <AgendaScreen/>},
  {name: 'CalendarsList', cmp: <CalendarsList/>},
  {name: 'HorizontalCalendarList', cmp: <HorizontalCalendarList/>},
  {name: 'ExpandableCalendar', cmp: <ExpandableCalendar/>}
]
export default class CalendarDemo extends React.Component {
  state = {
    cmp: null
  }

  onBackPress = () =>
    this.setState({cmp: null})

  renderItem = ({name, cmp}, index) =>
    <Text key={index} style={[material.title, {padding: 6}]} onPress={() =>
      this.setState({cmp: arrs[index]})}>{name}</Text>

  render() {
    const content = this.state.cmp ? this.state.cmp.cmp : arrs.map(this.renderItem)
    const leftBtn = this.state.cmp ? undefined : null
    const title = this.state.cmp ? this.state.cmp.name : 'calendar'
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationBar title={title} leftButton={leftBtn} onBackPress={this.onBackPress}/>
        {content}
      </SafeAreaView>
    )
  }
}
