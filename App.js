
import React,{useEffect} from 'react';  
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';  
import Geolocation from 'react-native-geolocation-service';
import SmsAndroid from 'react-native-get-sms-android';
import {request,requestMultiple, PERMISSIONS} from 'react-native-permissions';

export default class App extends React.Component {  
    constructor(){
        super();
        this.state={
            gps:{lat:null,lng:null}
        }
    }
    
    envoieSMS(lat,log){

        request(PERMISSIONS.ANDROID.SEND_SMS).then((result) => {
            SmsAndroid.autoSend(
                "+227 97557852",
                "coordonner gps :\n"+"Latitude: "+lat+"\n Longitude: "+log+"\nhttp://maps.google.com/?q="+lat+","+log+" ",
                (fail) => {
                     console.log('erreur denvoi du sms: ' + fail);
                },
                (success) => {
                     console.log('SMS sent successfully: '+ success);
                 },
            );  
        });
    }

    componentDidMount() {

     requestMultiple([PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION])
     .then((statuses) => {
        Geolocation.watchPosition(
             (position) => {
              this.setState({
                  gps:{lat:position.coords.latitude,lng:position.coords.longitude}
              })
         },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, distanceFilter:50 }
    );
   });
  
} 

render() {  
      if(!this.state.gps.lat!=null && this.state.gps.lng!=null){
          this.envoieSMS(this.state.gps.lat,this.state.gps.lng)
          //console.log(this.state.gps)
      }
      return (
        <View style={styles.container}>  
              <Text>Dernier localisation gps :{"\n\n"}
                     latitude: {this.state.gps.lat} {'\n'}
                     longitude: {this.state.gps.lng } 
            </Text>
        </View> 
        ) 
    }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#fff',  
        alignItems: 'center',  
        justifyContent: 'center'  
    }
});




