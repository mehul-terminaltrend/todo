import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class Welcome extends Component {
  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <View style={{...StyleSheet.absoluteFill}}>
          <Image source={require('../assets/bg.jpg')} style={{}} />
        </View>
        <View style={{height: height / 3, justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.Button}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>SignIn</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
            <View style={{...styles.Button, backgroundColor: 'white'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>SignUp</Text>
            </View>
          </TouchableOpacity>

         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    height: 60,
    marginHorizontal: 30,
    backgroundColor: '#e93766',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
});
