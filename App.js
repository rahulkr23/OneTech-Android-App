
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import OnboardingScreen from "./src/screens/Onboarding Screen/OnboardingScreen";
import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';



const AppStack = createStackNavigator();

const App = () => {

  const [isFirstLaunch, setIsFirstLaunch]= React.useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true)
      } else{
        setIsFirstLaunch(false)
      }
  
    })

  },[])

  if (isFirstLaunch == null) {
    return null;
  }else if (isFirstLaunch == true){
    return(
      <NavigationContainer>
   
      <AppStack.Navigator
      headerMode="none"
      
      >
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
        <AppStack.Screen name="DrawerNavigator" component={DrawerNavigator}/>

      </AppStack.Navigator>
      </NavigationContainer>

      

    )
  } else{
    return(
      <NavigationContainer>

      <DrawerNavigator/>
      </NavigationContainer>

    )
    

  }

}
export default App


