import React, { Component } from "react";
import { Text, View, TouchableOpacity,StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-input";


export default class PhoneNumber extends Component {
  constructor() {
    super();
    global.numerosTelephone = null;
    
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
  }

  renderInfo() {
    /*
    if (this.state.value) {
      return (
        <View style={styles.info}>
          <Text>
            Is Valid:{" "}
            <Text style={{ fontWeight: "bold" }}>
              {this.state.valid.toString()}
            </Text>
          </Text>
          <Text>
            Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
          </Text>
          <Text>
            Value:{" "}
            <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
          </Text>
        </View>
      );
    }
  */
  
  
    if(this.state.valid){
        global.numerosTelephone=this.state.value
        return (
          <Text> numeros saisi : {global.numerosTelephone}</Text>
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
          <Text>Get Info</Text>
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
