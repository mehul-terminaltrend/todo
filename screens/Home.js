import React from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  TextInput,
  View,
  StatusBar,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import AddButton from '../components/AddButton';
import AddTodo from '../components/AddTodo';
import TodoModel from '../api/todos';
import Ionicons from 'react-native-ionicons';
import firebase from 'react-native-firebase';

export default class Home extends React.Component {
  state = {
    addingTodo: false,
    todo: {
      title: 'title',
      completed: 'true',
      createdAt: '5',
    },
  };
  componentDidMount() {
    // includes the methods for creation, updation and deletion
    this.api = new TodoModel('react-todos');
  }

  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar backgroundColor={'#e93766'} barStyle="light-content" />
        <ScrollView>
          
          {this.state.addingTodo ? (
            <View style={styles.row}>
              <AddTodo
                onAdd={todo => {
                  this.setState({addingTodo: false});
                  this.setState({todo : this.state.todo.concat(todo)})
                  this.setState(todo => ({ todo: this.state.todo.concat(todo) }))

                }}
                todo={this.state.todo}
                onCancelDelete={() => this.setState({addingTodo: false})}
                onBlur={() => console.log}
              />
            </View>
          ) : null}
        </ScrollView>

      {/* logout button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(
                function() {
                  // Sign-out successful.
                  this.props.navigation.navigate('welcome');
                },
                function(error) {
                  // An error happened.
                },
              )
          }>
          <View style={{...styles.Button, backgroundColor: '#e93766'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>

        <AddButton onPress={() => this.setState({addingTodo: true})} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  Button: {
    height: 50,
    width: 100,
    marginRight: 300,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
});
