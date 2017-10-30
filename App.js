import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AComponent } from './AComponent'
import style from './Style'

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.green}>Nothing</Text>
        <AComponent />
      </View>
    );
  }
}
