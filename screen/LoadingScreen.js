import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';

import firebase from 'firebase';

class LoadingScreen extends Component{
  componentDidMount(){
    this.checkifloggedin();
  }
    checkifloggedin = () =>{
        firebase.auth().onAuthStateChanged(user =>
            {
                if(user)
                {
                    this.props.navigation.navigate('DashboardScreen');
                }
                else
                {
                    this.props.navigation.navigate('LoginScreen');
                }
            });
    };

    render(){
      return(
        <View style={styles.container}>
          <ActivityIndicator size='large' />
          <StatusBar style="auto" />
        </View>
      );
    }
  }

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
