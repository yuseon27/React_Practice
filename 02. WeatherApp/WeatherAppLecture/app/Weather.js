import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Weather({temp, title}) {

    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#ffffff']}
            style={styles.weather_back}>

            <View style={styles.icon_area}>
                <MaterialCommunityIcons style={styles.icon_custom} name={'weather-sunny'} size={170}/>
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
