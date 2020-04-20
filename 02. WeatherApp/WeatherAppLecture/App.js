import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Weather from './app/Weather';

export default class App extends React.Component {

  render() {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#ffffff']}
        style={styles.weather_back}>

        <View style={styles.icon_area}>
          <Text>
            Place for Icon
          </Text>
        </View>

        <View style={styles.weather_area}>
          <Text>
            Place for Weather
          </Text>
        </View>

      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  weather_back:{
    flex:1,
  },
  icon_area:{
    flex:2,
    borderWidth:10,
  },
  weather_area:{
    flex:1,
    borderWidth:10,
  },

});
