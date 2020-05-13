import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp, title}) {
    const weather_info = {
        Thunderstorm: {
            icon: 'weather-lightning-rainy',
            backcolor: ['#e9d362', '#333333'],
        },
        Drizzle: {
            icon: 'weather-hail',
            backcolor: ['#005AA7', '#FFFDE4'],
        },
        Rain: {
            icon: 'weather-pouring',
            backcolor: ['#3a7bd5', '#3a6073'],
        },
        Snow: {
            icon: 'weather- snowy',
            backcolor: ['#FFEFBA', '#FFFFFF'],
        },
        Mist: {
            icon: 'weather-fog',
            backcolor: ['#1c92d2', '#f2fcfe'],
        },
        Clear: {
            icon: 'weather-sunny',
            backcolor: ['#CAC531', '#F3F9A7'],
        },
        Clouds: {
            icon: 'weather-cloudy',
            backcolor: ['#bdc3c7', '#2c3e50'],
        },
    }

    return (
        <LinearGradient
            colors={weather_info[title].backcolor}
            style={styles.weather_back}>

            <View style={styles.icon_area}>
                <MaterialCommunityIcons style={styles.icon_custom} name={weather_info[title].icon} size={170}/>
            </View>

            <View style={styles.weather_area}>
                <Text style={styles.info_custom}>
                    {title}
                </Text>
                <Text style={styles.info_custom}>
                    {temp} ℉
                </Text>
            </View>

        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    weather_back:{
        flex:1,
      },
      icon_area:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
      },
      weather_area:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:70,
      },
      icon_custom:{
          color:'#ffffff',
      },
      info_custom:{
          color:'#ffffff',
          fontWeight:'bold',
          fontSize:30,
      }
});
