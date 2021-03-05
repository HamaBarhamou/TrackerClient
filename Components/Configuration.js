import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PhoneNumber from './PhoneNumber' 
import Calendar from './Calendar'
import Context from '../Context/Context'
const STARTDATE="startDate";
const ENDDATE="endDate";

export default class Configuration extends Component {
  static contextType=Context
  render() {
    return (
      <View style={styles.container}>
        <PhoneNumber/>
        <Calendar title="Start of the date and time of sms sending" date={this.context.startDate} periodeDate={STARTDATE} />
        <Calendar title="End of sms sending date and time" date={this.context.endDate} periodeDate={ENDDATE}/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 20
  },
});

  

