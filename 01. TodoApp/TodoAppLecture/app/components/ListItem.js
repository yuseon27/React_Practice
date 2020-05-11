import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function ListItem({name, isComplete, changeComplete, deleteItem}) {
  return (
    <View style={styles.listitembox}>
        <View style={styles.makerow}>
            <TouchableOpacity onPress={changeComplete}>
                <AntDesign name={isComplete ? 'checkcircle' : 'frowno'} size={20} style={styles.checkmargin}/>   
            </TouchableOpacity>

            <Text stype={styles.item}>{name}</Text>
        </View>

        <TouchableOpacity onPress={deleteItem}>
            <AntDesign name='close' size={20}/>   
        </TouchableOpacity>
    </View>
  );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    listitembox: {
        borderBottomWidth:1,
        padding:5,
        marginTop:10,
        width : width-60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    makerow: {
        flexDirection:'row',
    },
    item: {
        fontSize:20,
        fontWeight:'bold',
    },
    checkmargin :{
        marginRight:10,
    },
});