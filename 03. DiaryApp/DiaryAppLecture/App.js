import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainScreen from './screens/MainScreen';
import WriteScreen from './screens/WriteScreen';
import DetailScreen from './screens/DetailScreen';

/*
To hide label in bottom tab bar, 
in BaseNavi.Navigator,  write tabBarOptions={{showLabel:false}}
*/

const BottomOptions = {
  Main_Screen: {
    component: MainScreen,
    options: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="calendar-multiselect" size={25} style={{ color: tintColor }} />
      )
    }
  },
  Write_Screen: {
    component: WriteScreen,
    options: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="lead-pencil" size={25} style={{ color: tintColor }} />
      ),
    }
  },
  Detail_Screen: {
    component: DetailScreen,
    options: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="book-open-page-variant" size={25} style={{ color: tintColor }} />
      ),  
      tabBarOnPress: ({ navigation }) => (
        navigation.navigate('Write')
      )
    }
  },
}

BottomNavi = createBottomTabNavigator();
StackNavi = createStackNavigator();

export default class App extends React.Component {

  _bottom_navi() {
    return (
      <BottomNavi.Navigator>
        <BottomNavi.Screen name="Detail" component={BottomOptions.Detail_Screen.component} options={BottomOptions.Detail_Screen.options} /> 
        <BottomNavi.Screen name="Main" component={BottomOptions.Main_Screen.component} options={BottomOptions.Main_Screen.options} />
        <BottomNavi.Screen name="Write" component={BottomOptions.Write_Screen.component} options={BottomOptions.Write_Screen.options} />
      </BottomNavi.Navigator>
    );
  }

  // _write_navi({navigation}) {
  //   return (

  //   );
  // }

  StackOptions = {
    Write: WriteScreen,
    Bottom: this._bottom_navi,

    tabBarOnPress: ({ navigation }) => (
      navigation.navigate('Write')
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <BottomNavi.Navigator>
            <BottomNavi.Screen name="Detail" component={BottomOptions.Detail_Screen.component} options={BottomOptions.Detail_Screen.options} />
            <BottomNavi.Screen name="Main" component={BottomOptions.Main_Screen.component} options={BottomOptions.Main_Screen.options} />
            <BottomNavi.Screen name="Write" component={BottomOptions.Write_Screen.component} options={BottomOptions.Write_Screen.options} />
          </BottomNavi.Navigator>
        </NavigationContainer>
      </View >
    );
  }
}

// <StackNavi.Screen name="Detail" component={this._detail_navi}/>
// <StackNavi.Screen name="Main" component={this._main_navi}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
