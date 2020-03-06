import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {FAB} from 'react-native-paper';

export default class AddButton extends React.Component {
  constructor(props){
    super(props)
    
  }
  state = {title:'', completed:'', createdAt:''};

  render() {
    const { title, completed } = this.state;
    return (
      <FAB
        style={styles.fab}
        icon="plus"
        color="white"
        onPress={() => this.props.onPress()}
      />
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#e93766',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
