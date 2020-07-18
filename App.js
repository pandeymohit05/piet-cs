import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './screen/LoginScreen';
import LoadingScreen from './screen/LoadingScreen';
import DashBoardScreen from './screen/DashBoardScreen';
import * as firebase from 'firebase';
import { firebaseconfig } from './config';
firebase.initializeApp(firebaseconfig)

export default function App() {
  return (
    <AppNavigator/>
  );
}


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashBoardScreen:DashBoardScreen
})

const AppNavigator =createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
