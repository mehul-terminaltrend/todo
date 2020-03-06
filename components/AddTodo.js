
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  CheckBox,
} from 'react-native';
import Ionicons from 'react-native-ionicons';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    
    const { title, completed, createdAt } = this.props.todo;
    console.log(this.props)
    this.state = {
      title,
      completed,
      createdAt,
    };
  }
  onSubmit = () => {
    if (this.state.title.length > 0) this.props.onAdd(this.state);
    return null;
  };

  setStateUtil = (property, value = undefined) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const { title, completed } = this.state;
    const { onBlur } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 10,
          paddingBottom: 5,
          paddingTop: 50,
        }}>
        <CheckBox checked={'false'} onPress={() => this.setStateUtil('completed', !completed)} />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 25,
          }}>
          <TextInput
            style={{width: '90%'}}
            placeholder="What needs to be done?"
            autoFocus
            underLineColorAndroid="transparent"
            underlineColor="transparent"
            blurOnSubmit
            onSubmitEditing={this.onSubmit}
            onChangeText={changedTitle =>

              this.setStateUtil('title', changedTitle)
            }
            // value={"title"}
            autoCorrect={false}
            autoCapitalize="none"
            onBlur={onBlur}

          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.onCancelDelete()}
          style={{paddingLeft: 25, paddingRight: 15}}>
          <View>
            <Ionicons name="close-circle-outline" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
