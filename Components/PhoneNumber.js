import React, { Component } from "react";
import { Text, View,StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-input";
import Context from '../Context/Context'


export default class PhoneNumber extends Component {
  static contextType=Context
  
  constructor() {
    super();
    this.changePhone=this.changePhone.bind(this);
  }
 
  changePhone(){
    if(this.phone.isValidNumber()){
      this.context.changePhoneNumber(this.phone.getValue());
      console.log("numeros remplacer par: "+this.context.phoneNumber)
    }
    else{console.log("numero invalid")}
  }

  render() {
    return (
      <View style={styles.container}> 
        <Text>give the phone number of the gps sms recipient</Text>
        <PhoneInput
          ref={ref => {this.phone = ref;}}
          initialCountry='ne'
          textProps={{placeholder: 'Example: 97557852'}}
          onChangePhoneNumber={this.changePhone}
          value={this.context.phoneNumber}
        />
      </View>
    );
  }
}


let styles = StyleSheet.create({
  container: {
    //flex: 1
    //marginTop: 10,
  }
});
