import React from 'react';
import { StyleSheet, View, FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';

/*
1. Make UI
2. Make todo list into FlatList
3. Make input to added to todo list
4. Check that is done
5. Delete items
6. Store data
*/


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value : '',
      todos : [],  // [{title:'holahola', is_complete:false}, {title:'holaholaaa', is_complete:true}]
    }
  }

  componentWillMount() {
    this.getData()
  }

  storeData=()=>{
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  }

  getData=()=>{
    AsyncStorage.getItem('@todo:state').then((state)=> {
      if(state !== null) {
        this.setState(JSON.parse(state));
      } 
    })
  }

  _changeText = (i_value) => {
    this.setState({input_value:i_value});
  }

  _addTodoItem = () => {
    if (this.state.input_value !== '') {
      const prev_todos = this.state.todos;
      const new_todo   = {title:this.state.input_value, is_complete:false}

      this.setState({
        input_value : '',
        todos : prev_todos.concat(new_todo)
      }, this.storeData);

    }
  }
 
  _changeComplete = (index) => {
    const new_todo = [...this.state.todos];
    new_todo[index].is_complete = !new_todo[index].is_complete;

    this.setState({todos:new_todo}, this.storeData)
  }

  _deleteItem = (index) => {
    const new_todo = [...this.state.todos];
    new_todo.splice(index, 1);
    this.setState({todos:new_todo}, this.storeData);
  }


  _makeTodoItem = ({item, index}) => {
    return (
      <TodoItem
        title = {item.title}
        is_complete = {item.is_complete}
        change_complete = {()=>this._changeComplete(index)}
        delete_item = {()=>this._deleteItem(index)}
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
          <Input
            value={this.state.input_value}
            change_text={this._changeText}
            add_todo_item={this._addTodoItem}
          />
        </View>

        <View style={styles.subtitle_container}>
          <Subtitle title='My Todo List : ' />

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
