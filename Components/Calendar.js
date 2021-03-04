
import React, { useContext, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import {  Text, View } from "react-native";
import Context from '../Context/Context'



const Calendare= (props) => {
  const  [date, setDate] = useState(props.date)
  const context=useContext(Context)
  const changeDate=(date)=>  {
      setDate(date);
      if(props.periodeDate=="startDate"){
          context.changeStartDate(date)
      }
      if(props.periodeDate=="endDate"){
          context.changeEndDate(date)
      }
      
  }

    return (
      <View>
          <Text>{props.title}</Text>
          <DatePicker
            date={date}
            onDateChange={(dat)=> changeDate(dat)}
            mode="datetime"
          />
          <Text>
              Date selectionnée : {date.toDateString()} 
              
          </Text>
      </View>
    )
  }

export default Calendare
