import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

export default class Touchables extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <Text style={styles.buttonText}>Reggia di caserta</Text>
        </TouchableHighlight>

        <Divider style={styles.divider}/>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <Text style={styles.buttonText}>Piazza Vanvitelli</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'red',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  divider: {
    color: 'red'
  }
});