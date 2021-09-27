import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, Image, StyleSheet, } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("DrawerNavigator")}
      onDone={() => navigation.navigate("DrawerNavigator")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image style={{ width: 150, height: 150 }} source={require('../../assets/4.png')} />,
          title: 'Welcome To One Tech',
          subtitle: 'Connect With Each Other',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image style={{ width: 150, height: 150 }} source={require('../../assets/4.png')} />,
          title: 'Everything Here',
          subtitle: 'Enjoy All Features Here',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image style={{ width: 150, height: 150 }} source={require('../../assets/4.png')} />,
          title: 'Connect to world  ',
          subtitle: 'Make New Friends With One Tech',
        }

      ]}
    />

  );
};
export default OnboardingScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})