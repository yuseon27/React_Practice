import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({value, changeText, addTodoItem}) {
  return (
      <TextInput 
        value = {value}
        onChangeText = {changeText}
        onEndEditing = {addTodoItem}

        style={styles.inputtext}
        placeholder={'Write your todos'}
        maxlength={30}
        returnKeyType={'done'}/>
  );
}

const styles = StyleSheet.create({
    inputtext: {
        fontSize:17,
        marginTop:5,
        marginBottom:25,
    },
});