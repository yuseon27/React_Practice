import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import WriteHeader from '../components/WriteHeader';

export default class WriteScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WriteHeader />
        <Text style={styles.text_style}>Write Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style:{
      fontSize:40,
  }
});
