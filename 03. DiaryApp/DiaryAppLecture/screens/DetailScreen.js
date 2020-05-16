import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_style}>Detail Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style:{
      fontSize:40,
  }
});
