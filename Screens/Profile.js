import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default class Profile extends Component {
    render(){
        return(

<View style={styles.container}>
    <Text>This Is Profile Page</Text>
</View>

        )

        
    }
}

const styles = StyleSheet.create({
    container: {
    flex:1,
      backgroundColor: 'blue',

      
    },
  });