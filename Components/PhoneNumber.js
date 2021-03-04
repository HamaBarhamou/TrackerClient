import React, { Component } from "react";
import { Text, View, TouchableOpacity,StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-input";
import Context from '../Context/Context'


export default class PhoneNumber extends Component {
  static contextType=Context
  constructor() {
    super();
    //global.numerosTelephone = null;
    
    this.state = {
      valid: "",
      type: "",
      value: ""
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  updateInfo() {
    this.setState({
      valid: this.phone.isValidNumber(),
      type: this.phone.getNumberType(),
      value: this.phone.getValue()
    });

    if(this.state.valid){
      this.context.changePhoneNumber(this.state.value);
      console.log("numeros remplacer par: "+this.context.phoneNumber)
    }
    
  }

  renderInfo() {
  
  
    if(this.state.valid){
        //global.numerosTelephone=this.state.value
        return (
          <Text> numeros saisi : {/*global.numerosTelephone*/}</Text>
        );
    }
    
}

  render() {
    return (
      <View style={styles.container}> 
        <Text>give the phone number of the gps sms recipient</Text>
        <PhoneInput
          ref={ref => {this.phone = ref;}}
          initialCountry='ne'
          textProps={{placeholder: 'Example: 97557852'}}
        />
        
        <TouchableOpacity onPress={this.updateInfo}>
          <Text>Get Info  </Text>
        </TouchableOpacity>

        {this.renderInfo()}
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
