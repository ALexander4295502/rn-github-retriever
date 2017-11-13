import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Profile from "./Profile";

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
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };
    if(btn == 0) {
      obj.backgroundColor = '#48BBEC';
    } else if(btn == 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }
  goToProfile() {
    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: {userInfo: this.props.userInfo}
    });
  }
  goToRepos() {
    console.log('Going to Repos Page');
  }
  goToNotes() {
    console.log('Going to Notes Page');
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{url: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
          onPress={this.goToProfile.bind(this)}
          style={this.makeBackground(0)}
        >
          <Text style={styles.buttonText}>View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToRepos.bind(this)}
          style={this.makeBackground(1)}
        >
          <Text style={styles.buttonText}>View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToNotes.bind(this)}
          style={this.makeBackground(2)}
        >
          <Text style={styles.buttonText}>View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
}