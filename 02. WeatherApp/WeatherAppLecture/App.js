import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Weather from './app/Weather';

// https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=f3d674bdcb10c90903255ee16eeeb87d
const API_KEY = 'f3d674bdcb10c90903255ee16eeeb87d'    // use "fetch / axios" to use api


export default class App extends React.Component {

  componentDidMount(){
    this._getWeather()
  }

  _getWeather = async() => {  // async : process sequentially in this function
    const _response = await fetch(`https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`)  // ` : backtick , wait until execute ... celsius : &units=metric
    const _json_weather = await _response.json()

    //console.log(_response)
    console.log(_json_weather)
  }

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
    justifyContent:'center',
    alignItems:'center',
  },
  weather_area:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
  },

});
