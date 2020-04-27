import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './screens/MainScreen';
import WriteScreen from './screens/WriteScreen';
import DetailScreen from './screens/DetailScreen';

const BaseNavi = createBottomTabNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BaseNavi.Navigator>
          <BaseNavi.Screen name="Main" component={MainScreen} />
          <BaseNavi.Screen name="Write" component={WriteScreen} />
          <BaseNavi.Screen name="Detail" component={DetailScreen} />
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
