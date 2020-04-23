import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Weather from './app/Weather';

// https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=f3d674bdcb10c90903255ee16eeeb87d
const API_KEY = 'f3d674bdcb10c90903255ee16eeeb87d'    // use "fetch / axios" to use api


export default class App extends React.Component {

  constructor (props) {
    super(props);
    this.state= {
      isloaded : false,
    }
  }

  componentDidMount(){
    this._getWeather()
  }

  _getWeather = async() => {  // async : process sequentially in this function
    const _response = await fetch(`https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`)  // ` : backtick , wait until execute ... celsius : &units=metric
    const _json_weather = await _response.json()

    this.setState({isloaded : true, temp:Math.floor(_json_weather.main.temp), title:_json_weather.weather[0].main})

    console.log(_json_weather)
  }

  render() {
    return (
      console.log(this.state),
      <View style={styles.container}>
        {this.state.isloaded? <Weather temp={this.state.temp} title={this.state.title}/> : <ActivityIndicator style={styles.indicator_location} color='black' size='large'/>}
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  indicator_location: {
    flex: 1,
  }

});
