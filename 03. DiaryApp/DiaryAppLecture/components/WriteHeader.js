import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const WriteHeader = ({navigation}) =>{
    return (
        <View>
            <TouchableOpacity>
                <MaterialCommunityIcons name="backspace" size={30}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });


  export default withNavigation(WriteHeader)