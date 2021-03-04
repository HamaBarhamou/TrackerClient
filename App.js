//import 'react-native-gesture-handler'; // l'importer en premier

import * as React from 'react';
import Navigation from './Navigation/Navigation';
import {StyleSheet,View} from 'react-native';
//import ConfigContext from './Context/ConfigContext'
import GlobalState from './Context/GlobalState'

export default class App extends React.Component {  
    
render() {  

      return (
        <GlobalState>
            <View style={styles.container}>
                <Navigation/>
            </View> 
        </GlobalState> 
      ) ;     
     };
}


const styles = StyleSheet.create({  
    container: {  
        flex: 1, 
    },
});

/*
    coordonner:{
        flex:5,
        justifyContent: 'center' 
    },
    configuration:{
        flex:1
    }
});
*/


