import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Calendar = () => {
    return(
        <View style={style.container}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Coming Soon</Text>
        </View>
    );
};
export default Calendar;

 const style = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent:'center'

     }

 })