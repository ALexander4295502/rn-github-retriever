import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    alignSelf: 'center'
  }
});

export default class Dashboard extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is the dashboard</Text>
        <Text> the blog is {this.props.userInfo.blog} </Text>
      </View>
    )
  }
}