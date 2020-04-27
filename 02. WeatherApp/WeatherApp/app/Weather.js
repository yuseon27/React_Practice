import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather() {
    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.weather_back}
        >

        </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
      
    weather_back: {
        flex: 1,
    },
    icon_container : {
        flex : 2,
    },
    text_container : {
        flex : 1,
    },


  });
  