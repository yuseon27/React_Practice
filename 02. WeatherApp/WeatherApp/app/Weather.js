import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temperature, icon_msg}) {
    const weather_info = {
        Thunderstorm: {
            icon: 'weather-lightning-rainy',
            back_color: ['#e9d362', '#333333'],
        },
        Drizzle: {
            icon: 'weather-hail',
            back_color: ['#005AA7', '#FFFDE4'],
        },
        Rain: {
            icon: 'weather-pouring',
            back_color: ['#3a7bd5', '#3a6073'],
        },
        Snow: {
            icon: 'weather- snowy',
            back_color: ['#FFEFBA', '#FFFFFF'],
        },
        Mist: {
            icon: 'weather-fog',
            back_color: ['#1c92d2', '#f2fcfe'],
        },
        Clear: {
            icon: 'weather-sunny',
            back_color: ['#CAC531', '#F3F9A7'],
        },
        Clouds: {
            icon: 'weather-cloudy',
            back_color: ['#bdc3c7', '#2c3e50'],
        },
    }

    return (
        <LinearGradient
            colors={weather_info[icon_msg].back_color}
            style={styles.weather_back}
        >
            <View style={styles.icon_container}>
                <MaterialCommunityIcons name={weather_info[icon_msg].icon} size={170} color='#FFFFFF'/>
            </View>

            <View style={styles.info_container}>
                <Text style={styles.info_text}>
                    {icon_msg}
                </Text>
                <Text style={styles.info_text}> 
                    {temperature} °C
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
  