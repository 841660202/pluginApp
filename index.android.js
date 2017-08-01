/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView
} from 'react-native';
import App from './js/App';
// import AnimatedBasic1 from './app/animatedBasic1'
// import AnimatedBasic2 from './app/animatedBasic2'
// import AnimatedBasic3 from './app/animatedBasic3'
// import AnimatedBasic4 from './app/animatedBasic4'
// import AnimatedBasic5 from './app/animatedBasic5'
// import AnimatedBasic6 from './app/animatedBasic6'
// import AnimatedBasic7 from './app/animatedBasic7'
// import AnimatedBasic8 from './app/animatedBasic8'
// import AnimatedBasic9 from './app/animatedBasic9'
// import Baiduditu from './baiduditu'
export default class pluginApp extends Component {
  render() {
    return (
       <App/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('pluginApp', () => pluginApp);
















