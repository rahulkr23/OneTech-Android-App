import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   calculate = (height, weight) => {
    var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
    result = result.toFixed(2);
    this.setState({ bmi: result });
      if(height==''||weight==''||height==0){
          alert("Your height or weight input box is empty ");
          result='Enter your data first';
          this.setState({ bmi: result });
      }
      else if(result<18.5){
         this.setState({BmiResult:'Underweight'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'Normal weight'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Overweight'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Obese'})
      }
      else{
         alert('Please Provide correct input');
         this.setState({BmiResult:''})
      }
   }
   render() {
      return (
         <View style = {styles.container}>
        {/* <Image style= { styles.backgroundImage } source={require('../../assets/bg.png')} /> */}
        <View style={styles.container1}>
        {/* <Image style= { styles.logo1 } source={require('../../assets/bg.png')} /> */}

        </View>
          <Text style={styles.title1}>bMi Calculator</Text>
          
            <Text  style = {styles.labelh}>Height : </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height (Cm)"
               autoCapitalize = "none"
               keyboardType = 'numeric'
               placeholderTextColor="#fff" 
               onChangeText = {this.handleHeight}/>
            <Text  style = {styles.labelw}>Weight : </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight (Kg)"
               autoCapitalize = "none"
               placeholderTextColor="#fff" 
               keyboardType = 'numeric'
               onChangeText = {this.handleWeight}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      flex:1,
      justifyContent: "center",
   },
   backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
      width:400,
      height:'100%',
   },
   container1:{
      justifyContent: "center",
      alignItems: 'center',
      
   },
   logo1:{
      top:25,
      width: 100,
      height: 100,
   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderBottomColor: '#ffff',
      color:'white'
   },
   submitButton: {
      backgroundColor: '#96bb7c',
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius: 10,
      marginBottom:10,
      
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,  
      color: '#d6efc7'
   },
   title1:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 25,
      fontWeight:"bold",
      color:'#96bb7c',
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: '#d6efc7'
   },
   labelh:{
      paddingTop:30,
      marginLeft: 15,
      fontSize: 20,
      color:'#fad586',
   },
   labelw:{
    paddingTop:10,
    marginLeft: 15,
    fontSize: 20,
    color:'#fad586',
 }
})
