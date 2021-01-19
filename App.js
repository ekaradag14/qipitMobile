/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreatePromiseScreen from './src/screens/CreatePromiseScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';

//const App: () => React$Node = () => {
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    {
      entryFlow: createSwitchNavigator({
        Signup: SignupScreen,
        Login: LoginScreen,
      }),
      Home: HomeScreen,
      CreatePromise: CreatePromiseScreen,
    },
    {
      headerMode: 'none',
    },
  ),
  mainFlow: createBottomTabNavigator({
    accountFlow: createStackNavigator({
      Home: HomeScreen,
    }),
  }),
});

export default createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
