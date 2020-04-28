import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class MainScreen extends React.Component {
  // Not working this way but don't know why...
  // static options = {
  //   tabBarIcon : ({tintColor}) => (
  //     <MaterialCommunityIcons name = "calendar-multiselect" size={30} style={{color:tintColor}}/>
  //   )
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text_style}>Main Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style:{
      fontSize:40,
  }
});
