import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeApp from '../screens/Home Screen/HomeApp';
import ChatApp from '../screens/Chat Screen/ChatApp'
import DictionaryApp from '../screens/Dictionary Screen/DictionaryApp';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#5462E0',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen
                name="News"
                component={HomeApp}
                options={{
                    tabBarLabel: 'Latest News',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="news" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Chat"
                component={ChatApp}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="whatsapp" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Live Dictionary"
                component={DictionaryApp}
                options={{
                    tabBarLabel: 'Live Dictionary',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="book" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;