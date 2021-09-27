import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const NotesApp = () => {
    return(
        <View style={style.container}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Coming Soon</Text>
        </View>
    );
};
export default NotesApp;

 const style = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent:'center'

     }

 })

