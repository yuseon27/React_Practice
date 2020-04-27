import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './app/Weather'

/*
1. Linear Gradient
2. Weather API
3. Loading
4. UI
*/


const API_KEY = 'f3d674bdcb10c90903255ee16eeeb87d'

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this._getWeatherInfo()
  }

  _getWeatherInfo = async() => {
    const _response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}&units=metric`)
    const _json_weather = await _response.json()

    console.log(_json_weather)
    console.log(_json_weather.main.temp)
  }

  render() {
    return (
      <View style={styles.container}>
        <Weather/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
