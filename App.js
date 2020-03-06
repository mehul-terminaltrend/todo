import 'react-native-gesture-handler';

import React, { Component } from 'react'
import { Text, StyleSheet, View,ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome'
import Loading from './components/Loading'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import Home from './screens/Home'
import {theme} from './constants';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerTransparent: {
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0
        },  headerShown: false,
        }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen options={{ title: ' Todo' , headerStyle: {
            backgroundColor: '#f4511e',
          }, headerShown: true,headerTintColor: '#e93766',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})

