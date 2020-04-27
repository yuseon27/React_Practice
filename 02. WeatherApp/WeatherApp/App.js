import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Weather from './app/Weather'
import * as Location from 'expo-location';

/*
1. Linear Gradient
2. Weather API
3. Loading
4. UI
5. Get Current Location
*/


const API_KEY = 'f3d674bdcb10c90903255ee16eeeb87d'

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      is_loaded : false,
    }
  }

  componentDidMount() {
    this._getWeatherInfo()
  }

  _getWeatherInfo = async() => {
    // await Location.requestPermissionsAsync()  // For allowing permission
    const _location = await Location.getCurrentPositionAsync()
    const {coords : {latitude, longitude}} = _location
    console.log(latitude, longitude)

    const _response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    const _json_weather = await _response.json()

    console.log(_json_weather.main.temp, _json_weather.weather[0].main)

    this.setState({is_loaded:true, temperature:Math.floor(_json_weather.main.temp), icon_msg:_json_weather.weather[0].main})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.is_loaded ? <Weather temperature={this.state.temperature} icon_msg={this.state.icon_msg}/> : <ActivityIndicator style={styles.container} color='black' size='large'/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
