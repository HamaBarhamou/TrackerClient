/*import React, { Component } from 'react'
import DatePicker from 'react-native-date-picker'
import {  Text, View } from "react-native";

//const Calendar= () => {
  //const [date, setDate] = useState(new Date())
export default class Configuration extends Component {
    constructor() {
        super();
        this.state = {
          dateSelectionne: new Date()
        }
        this.onDateChange=this.onDateChange.bind(this)
    }
    
    getDate(){
        return this.state.dateSelectionne.toDateString()
    }

    onDateChange(){
      this.setState({
        dateSelectionne:this.date
      })
    }

  render() {
  return (
    <View>
        <DatePicker
            date={new Date()}
            
            //date={this.updateDate()}
            //onDateChange={this.onDateChange()}
        />
        <Text>
             date dans la console : {this.getDate()}
        </Text>
        <DatePicker date={new Date()}/>
    </View>
  )
}
}

//export default Calendar
*/

import React, {useState } from 'react'
import DatePicker from 'react-native-date-picker'
import {  Text, View } from "react-native";

const Calendare= (props) => {
  const  [date, setDate] = useState(new Date())

  return (
    <View>
        <Text>{props.title}</Text>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="datetime"
        />
        <Text>
             date dans la console : {date.toDateString() }
             {console.log(date)}
        </Text>
    </View>
  )
}

export default Calendare
