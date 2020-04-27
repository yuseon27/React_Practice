import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather() {
    return (
        <LinearGradient
            colors={['#CAC531', '#F3F9A7']}
            style={styles.weather_back}
        >
            <View style={styles.icon_container}>
                <Text>
                    Here is a place for icon
                </Text>
            </View>

            <View style={styles.info_container}>
                <Text> 
                    Here is a place for the informaiton of weather
                </Text>
            </View>

        </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
      
    weather_back: {
        flex: 1,
    },
    icon_container : {
        flex : 2,
        justifyContent:'center',
        alignItems:'center',
    },
    info_container : {
        flex : 1,
        alignItems:'flex-end',
        paddingRight:50,
    },


  });
  