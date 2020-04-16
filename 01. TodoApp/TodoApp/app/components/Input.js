import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input(value) {
    return (
        <TextInput
            style={styles.input_text}
            placeholder={'TODOTODOTODO'}
            maxLength={30}
            returnKeyType='done'
        >
        </TextInput>
    );
  }


  const styles = StyleSheet.create({
    input_text : {
        fontSize:17,
        marginTop:5,
        marginBottom:25,
    }
});