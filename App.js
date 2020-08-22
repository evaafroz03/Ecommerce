
import React ,{useState}from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import TabNavigator from './Navigate/Navigation';
// import TabNavigator from './Screens/Cart'
const getFonts = ()=> Font.loadAsync({
  'playfair-semibold': require('./assets/fonts/PlayfairDisplay-SemiBold.ttf'),
  
})
export default function App() {
  const [fontsLoaded , setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <View style={styles.container}>
      <TabNavigator/>
     
       </View>
    )
  }else{
    return (
  <AppLoading startAsync ={getFonts} onFinish={()=> setFontsLoaded(true)}/>
      )
  }

}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    // marginTop: 100 ,
    backgroundColor: '#fff',

    
  },
});
