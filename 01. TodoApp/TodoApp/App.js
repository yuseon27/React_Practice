import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value : '',
      todos : [{title:'holahola'}, {title:'holaholaaa'}],
    }
  }

  _makeTodoItem({item, index}) {
    return (
      <TodoItem
        title={item.title}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Header title='TODO' />
        </View>

        <View style={styles.subtitle_container}>
          <Subtitle title='Input My Todo : ' />
          <Input/>
        </View>

        <View style={styles.subtitle_container}>
          <Subtitle title='My Todo List : ' />

          <TodoItem title='today' />
          <TodoItem title='wanna finish' />

          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index)=>{return '${index}'}}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle_container: {
    marginLeft:30,
    marginRight:30,
    marginBottom:10,
  },


});
