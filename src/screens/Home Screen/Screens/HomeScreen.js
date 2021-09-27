import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';

class HomeScreen extends Component {

  render() {
    return (
      <View>
        <Text style={styles.header}>Latest News</Text>
        <Categories navigation={this.props.navigation} />
        <TrendingNews navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
export default HomeScreen;
