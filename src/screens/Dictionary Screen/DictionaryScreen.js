import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DictionaryScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Dictionary Screen</Text>
       </View>
    )
}
export default DictionaryScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    }
})