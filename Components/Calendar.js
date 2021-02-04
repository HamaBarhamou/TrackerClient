
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
