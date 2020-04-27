import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({temperature, icon_msg}) {
    return (
        <LinearGradient
            colors={['#CAC531', '#F3F9A7']}
            style={styles.weather_back}
        >
            <View style={styles.icon_container}>
                <Text>
                    {icon_msg}
                </Text>
            </View>

            <View style={styles.info_container}>
                <Text style={styles.info_text}>
                    {icon_msg}
                </Text>
                <Text style={styles.info_text}> 
                    {temperature} ℉
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
    info_text : {
        fontSize:30,
        color:'#FFFFFF',
        fontWeight:'bold',
    }

  });
  