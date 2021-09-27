
import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const About = () => {

    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.postimg.cc/fyfpV7M1/4.png' }}
                    style={styles.img}
                />
                <Text style={styles.text}>OneTech</Text>
            </View>
            <View>
                <Text style={{ fontSize: 30, color: 'green', marginLeft: 20 }}>Features:-</Text>
                <Text style={styles.feature}>1.We Can Read Latest News</Text>
                <Text style={styles.feature}>2.We Can Chat To Every Person Who is Using This App</Text>
                <Text style={styles.feature}>3.Live Dictionary</Text>
                <Text style={styles.feature}>4.OneNote</Text>
                <Text style={styles.feature}>5.Calculator</Text>
                <Text style={styles.feature}>6.Calendar</Text>
                <Text style={styles.feature}>7.MusicPlayer</Text>
                <Text style={styles.feature}>8.VideoPlayer</Text>
                <Text style={styles.feature}>9.Drawing</Text>
                <Text style={styles.feature}>10.StopWatch</Text>
                <Text style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Note:-This app is in development some features are missing Early Access try it and provide feedback</Text>
            </View>
        </TouchableOpacity>
    )
}
export default About;

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        width: deviceWidth - 30,
        marginVertical: 7,
        height: 120,
        marginLeft: 14,
        marginTop: 20,
        justifyContent: 'center',
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 14,
        marginLeft: 30
    },
    text: {
        width: deviceWidth - 130,
        paddingLeft: 20,
        paddingTop: 38,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'
    },
    feature: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        margin: 5
    }
});
