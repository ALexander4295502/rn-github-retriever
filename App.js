/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  NavigatorIOS,
} from 'react-native';

import Main from './Components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
});

export default class App extends Component<{}> {
  render() {
    console.log("hello there");
    debugger;
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'github notetaker',
          component: Main
        }}
      />
    );
  }
}
