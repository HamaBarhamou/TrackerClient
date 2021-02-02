import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PhoneNumber from './PhoneNumber' 
import Calendar from './Calendar'

export default class Configuration extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Button
        title="activé"
        //disabled="true"
        />
        <PhoneNumber/>
        <Calendar title="Start of the date and time of sms sending"/>
        <Calendar title="End of sms sending date and time"/>
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

  

