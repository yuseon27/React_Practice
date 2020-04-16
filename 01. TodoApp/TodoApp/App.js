import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Header title='TODO'/>
      </View>

      <View style={styles.subtitle_container}>
        <Subtitle title='Input your Todo : '/>
        <Input/>
      </View>

      <View style={styles.subtitle_container}>
        <Subtitle title='Your Todo List : '/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle_container: {
    marginLeft:30,
    marginBottom:10,
  },


});
