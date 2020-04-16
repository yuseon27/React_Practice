import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function TodoItem({title}) {
    return (
        <View style={styles.list_item_box}>

            <View style={styles.make_row}>
                <TouchableOpacity>
                    <AntDesign name='checkcircle' size={20} style={styles.check_box}/>   
                </TouchableOpacity>
                <Text style={styles.todo_text}>{title}</Text>
            </View>

            <TouchableOpacity>
                <AntDesign name='close' size={20}/>   
            </TouchableOpacity>
      </View>
    );
  }

  const {width, height} = Dimensions.get('window')

  const styles = StyleSheet.create({
      list_item_box : {
        borderBottomWidth:1,
        padding:5,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
      },
      make_row : {
          flexDirection:'row'
      },
      check_box : {
        marginRight:20,
      },
      todo_text : {
        fontSize : 17,
      },
});
