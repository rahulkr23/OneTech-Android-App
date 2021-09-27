import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Title, Drawer, } from 'react-native-paper';

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}></View>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 1, backgroundColor: 'purple', borderRadius: 5 }}>
                        <TouchableOpacity>
                            <Avatar.Image
                                source={{
                                    uri: 'https://i.postimg.cc/YChmWh4S/4.png'
                                }}
                                size={65}
                            />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                            <TouchableOpacity>
                                <Title style={styles.title}>OneTech</Title>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="home-outline"
                                        color='#150687'
                                        size={25}
                                    />
                                )}
                                label="Home"
                                onPress={() => { props.navigation.navigate('TabNavigator') }}
                            />



                        </View>
                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="note-outline"
                                        color='#CB4335'
                                        size={25}
                                    />
                                )}
                                label="OneNote"
                                onPress={() => { props.navigation.navigate('OneNote') }}
                            />
                        </View>
                        <View style={{ borderBottomWidth: 0.2, }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="calculator"
                                        color='#2C3E50'
                                        size={25}
                                    />
                                )}
                                label="Calculator"
                                onPress={() => { props.navigation.navigate('Calculator') }}
                            />
                        </View>

                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="calendar"
                                        color='#4D5656'
                                        size={25}
                                    />
                                )}
                                label="Calendar"
                                onPress={() => { props.navigation.navigate('Calendar') }}
                            />
                        </View>

                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="music"
                                        color='#003F55'
                                        size={25}
                                    />
                                )}
                                label="MusicPlayer"
                                onPress={() => { props.navigation.navigate('Music') }}
                            />
                        </View>

                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="video"
                                        color='#CD5C5C'
                                        size={25}
                                    />
                                )}
                                label="VideoPlayer"
                                onPress={() => { props.navigation.navigate('Video') }}
                            />
                        </View>


                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="pencil"
                                        color='#8E44AD'
                                        size={25}
                                    />
                                )}
                                label="Drawing"
                                onPress={() => { props.navigation.navigate('Drowing') }}
                            />
                        </View>


                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="clock-outline"
                                        color='#273746'
                                        size={25}
                                    />
                                )}
                                label="StopWatch"
                                onPress={() => { props.navigation.navigate('StopWatch') }}
                            />
                        </View>

                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="share"
                                        color='#707B7C'
                                        size={25}
                                    />
                                )}
                                label="ShareApp"
                                onPress={() => { props.navigation.navigate('Share') }}
                            />
                        </View>

                        <View style={{ borderBottomWidth: 0.2 }}>
                            <DrawerItem
                                icon={(color, size) => (
                                    <Icon name="account-outline"
                                        color='#5B2C6F'
                                        size={25}
                                    />
                                )}
                                label="Developer"
                                onPress={() => { props.navigation.navigate('Developer') }}
                            />
                        </View>

                        <DrawerItem
                            icon={(color, size) => (
                                <Icon name="apps"
                                    color={color}
                                    size={25}
                                />
                            )}
                            label="AboutApp"
                            onPress={() => { props.navigation.navigate('About') }}
                        />

                        <DrawerItem
                            icon={(color, size) => (
                                <Icon name="lock"
                                    color='#FF0000'
                                    size={25}
                                />
                            )}
                            label="Privacy Policy"
                            onPress={() => { props.navigation.navigate('Privacy') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        color: '#fff',
        marginLeft: 10,
    },
    Row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});