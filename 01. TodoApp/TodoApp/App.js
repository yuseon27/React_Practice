import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Header title='TODO'/>
      </View>

      <View style={styles.subtitle_container}>
        <Subtitle title='Input My Todo : '/>
        <Input/>
      </View>

      <View style={styles.subtitle_container}>
        <Subtitle title='My Todo List : '/>

        <TodoItem title='today'/>
        <TodoItem title='wanna finish'/>
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
    marginRight:30,
    marginBottom:10,
  },


});
