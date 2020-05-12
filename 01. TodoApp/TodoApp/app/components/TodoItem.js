import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function TodoItem({title, is_complete, change_complete, delete_item}) {
    return (
        <View style={styles.list_item_box}>

            <View style={styles.make_row}>
                <TouchableOpacity onPress={change_complete}>
                    <AntDesign name={is_complete ? 'checkcircle' : 'frowno'} size={20} style={styles.check_box}/>   
                </TouchableOpacity>
                <Text style={styles.todo_text}>{title}</Text>
            </View>

            <TouchableOpacity onPress={delete_item}>
                <AntDesign name='close' size={20}/>   
            </TouchableOpacity>
      </View>
    );
  }

  // const {width, height} = Dimensions.get('window')

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
