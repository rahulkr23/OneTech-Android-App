import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Video from '../screens/Sidebar Screen/Video'
import StopWatch from "../screens/Sidebar Screen/StopWatch";
import Developer from '../screens/Sidebar Screen/Developer Screen/Developer';
import Onenote from '../screens/Sidebar Screen/Notes Screen/OneNote'
import Music from "../screens/Sidebar Screen/Music";
import Share from '../screens/Sidebar Screen/Share';
import Drowing from '../screens/Sidebar Screen/Drowing';
import Calendar from "../screens/Sidebar Screen/Calendar";
import About from '../screens/Sidebar Screen/About Screen/About';
import CalculatorApp from '../screens/Sidebar Screen/Calculator Screen/CalculatorApp';
import PrivacyPolicy from "../screens/Sidebar Screen/Privacy Screen/PrivacyPolicy";

import { DrawerContent } from "./CustomDrawer";


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
            initialRouteName="Home"
            drawerPosition='left'
            drawerType="front"
            edgeWidth={100}
            hideStatusBar={false}
            overlayColor="#00000090"
            drawerStyle={{
                backgroundColor: '#fff',
                width: 250,
            }}

            screenOptions={{
                headerShown: true,
                swipeEnabled: true,
                gestureEnabled: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#121414',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                },
            }}>

            <Drawer.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{
                    title: 'OneTech',
                }}
            />
            <Drawer.Screen
                name="OneNote"
                component={Onenote}
                options={{
                    title: 'OneNote',
                }}
            />
            <Drawer.Screen
                name="Calculator"
                component={CalculatorApp}
                options={{
                    title: 'Calculator',
                }}
            />
            <Drawer.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    title: 'Calendar',
                }}
            />
            <Drawer.Screen
                name="Music"
                component={Music}
                options={{
                    title: 'Music Player',
                }}
            />
            <Drawer.Screen
                name="Video"
                component={Video}
                options={{
                    title: 'Video Player',
                }}
            />

            <Drawer.Screen
                name="Drowing"
                component={Drowing}
                options={{
                    title: 'Drowing',
                }}
            />
            <Drawer.Screen
                name="StopWatch"
                component={StopWatch}
                options={{
                    title: 'Stop Watch',
                }}
            />
            <Drawer.Screen
                name="Share"
                component={Share}
                options={{
                    title: 'Share App',
                }}
            />
            <Drawer.Screen
                name="Developer"
                component={Developer}
                options={{
                    title: 'Developer',
                }}
            />
            <Drawer.Screen
                name="About"
                component={About}
                options={{
                    title: 'About App',
                }}
            />
            <Drawer.Screen
                name="Privacy"
                component={PrivacyPolicy}
                options={{
                    title: 'Privacy Policy',
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;