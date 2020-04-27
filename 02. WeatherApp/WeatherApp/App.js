import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './app/Weather'

export default class App extends React.Component {



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
