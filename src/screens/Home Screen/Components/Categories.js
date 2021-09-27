import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const categories = [
    'Entertainment',
    'Sports',
    'Politics',
    'Health',
    'Technology',
    'Business',
];
class Categories extends Component {
    state = {};
    render() {
        return (
            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            this.props.navigation.navigate('GetNews', {
                                category,
                            })
                        }>
                        <View>
                            <Text style={styles.category}>{category}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    category: {
        padding: 10,
        fontSize: 12,
        margin: 5,
        borderRadius: 5,
        color: 'white',
        backgroundColor: '#5462E0',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
export default Categories;