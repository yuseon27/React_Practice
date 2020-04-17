import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({i_value, change_text, add_todo_item}) {
    return (
        <TextInput
            value = {i_value}
            onChangeText = {change_text}
            onEndEditing = {add_todo_item}

            style={styles.input_text}
            placeholder={'TODOTODOTODO'}
            maxLength={30}
            returnKeyType='done'
        />
    );
  }


  const styles = StyleSheet.create({
    input_text : {
        fontSize:17,
        marginTop:5,
        marginBottom:25,
    }
});