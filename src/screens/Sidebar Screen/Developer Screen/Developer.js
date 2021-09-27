
import React, { Component } from 'react'
import { Text, View,Dimensions,Image,StyleSheet, TouchableOpacity} from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const Developer=()=> {
        return (
            <TouchableOpacity>
            <View style={styles.card}>
            <Image
              source={{uri: 'https://i.postimg.cc/sD3t6qPm/IMG-20210723-234235-1.jpg' }}
              style={styles.img}
            />
            <Text
              style={styles.text}>Rahul Kumar</Text>
          </View>
          <View>
            <Text style={styles.text1}>Any Query Feel Free To contact Me.</Text>
            <Text style={styles.text2}>Email:-rahulwhy23@gmail.com</Text>
          </View>
          </TouchableOpacity>      
        )
    }
export default Developer

const styles = StyleSheet.create({

card:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    width: deviceWidth - 30,
    marginVertical: 7,
    height:120,
    marginLeft:14,
    marginTop:20,
    justifyContent:'center'
},
img:{
    height: 90,
     width: 90,
      borderRadius: 50,
       marginTop:14,
       marginLeft:5
},
text:{
    width: deviceWidth - 130,
    paddingLeft: 20,
    paddingTop: 38,
    fontSize:30,
    fontWeight:'bold',
    color:'black'
},
text1:{
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold'
},

text2:{
textAlign:'center',
  fontSize:15,
  fontWeight:'bold',
  color:'green'
},

  });
  
