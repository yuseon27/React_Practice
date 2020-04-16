import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}) {
    return (
      <View style={styles.header_container}>
        <Text style={styles.header_text}>{title}</Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    header_container: {
        marginTop:50,
        marginBottom:50,
    },
    header_text : {
        fontSize:25,
        fontWeight:'bold',
        color:'#3f4e66',
    }
});
