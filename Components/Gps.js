import React, { Component } from 'react';
import { Text ,View,Button,StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SmsAndroid from 'react-native-get-sms-android';
import {request,requestMultiple, PERMISSIONS} from 'react-native-permissions';
import Map from './Map'



class Gps extends Component {
    constructor(){
        super();
        this.state={
            gps:{lat:null,lng:null}
        }
    }
    
    envoieSMS(phone,lat,log){

        request(PERMISSIONS.ANDROID.SEND_SMS).then((result) => {
            SmsAndroid.autoSend(
                //"+226 77284087",
                //"+227 97557852",
                phone,
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
            //console.log(position)
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
   
    //console.log(global.SampleVar)

    if(!this.state.gps.lat!=null && this.state.gps.lng!=null){
        
        this.envoieSMS("+22797557852",this.state.gps.lat,this.state.gps.lng)
    }

    return (
        <View style={styles.container}>
            <Map/>
            <Text>Dernier localisation gps :{"\n\n"}
                latitude: {this.state.gps.lat} {'\n'}
                longitude: {this.state.gps.lng }  {"\n"}
                sms envoyer au :{global.numerosTelephone}
            </Text> 
            <Button title="parametre" 
                    onPress={() => {this.props.navigation.navigate('Configuration')}}
            />
        </View>  
    );
  }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#fff',  
        alignItems: 'center',     
    }
})

export default Gps;