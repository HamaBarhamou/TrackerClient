//import 'react-native-gesture-handler'; // l'importer en premier

import * as React from 'react';
import Navigation from './Navigation/Navigation';
import {StyleSheet,View} from 'react-native';
import { PersistGate } from "redux-persist/integration/react";
import {Provider} from 'react-redux'
import { store, persistor } from './Redux/configureStore'





export default class App extends React.Component {  
    
render() {  

      return (
             <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <View style={styles.container}>
                        <Navigation/>
                    </View>
                </PersistGate>
            </Provider>
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


