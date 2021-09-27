import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import GetNews from './Screens/GetNews';
import WebViewComponent from './Components/WebView';

const Stack = createStackNavigator();
function HomeApp() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={HomeScreen}options={{ headerShown: false }} />
        <Stack.Screen name='GetNews' component={GetNews} />
        <Stack.Screen name='WebView' component={WebViewComponent} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
export default HomeApp;

