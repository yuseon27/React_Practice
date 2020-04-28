import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainScreen from './screens/MainScreen';
import WriteScreen from './screens/WriteScreen';
import DetailScreen from './screens/DetailScreen';

const BaseNavi = createBottomTabNavigator()

const NaviOptions = {
  Main_Screen : {
    component : MainScreen,
    options : {
      tabBarIcon : ({tintColor}) => (
        <MaterialCommunityIcons name = "calendar-multiselect" size={30} style={{color:tintColor}}/>
      )
    }
  },
  Write_Screen : {
    component : WriteScreen,
    options : {
      tabBarIcon : ({tintColor}) => (
        <MaterialCommunityIcons name = "calendar-multiselect" size={30} style={{color:tintColor}}/>
      )
    }
  },
  Detail_Screen : {
    component : DetailScreen,
    options : {
      tabBarIcon : ({tintColor}) => (
        <MaterialCommunityIcons name = "calendar-multiselect" size={30} style={{color:tintColor}}/>
      )
    }
  },
}

/*
To hide label in bottom tab bar, 
in BaseNavi.Navigator,  write tabBarOptions={{showLabel:false}}
*/

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BaseNavi.Navigator>
          <BaseNavi.Screen name="Write" component={NaviOptions.Write_Screen.component} options={NaviOptions.Write_Screen.options} />
          <BaseNavi.Screen name="Main" component={NaviOptions.Main_Screen.component} options={NaviOptions.Main_Screen.options}/>
          <BaseNavi.Screen name="Detail" component={NaviOptions.Detail_Screen.component} options={NaviOptions.Detail_Screen.options} />
        </BaseNavi.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
