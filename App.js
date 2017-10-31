import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AComponent } from './AComponent'
import style from './Style'
import header from './stylesheets/header'
import { Header } from './Header'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text style={style.green}>Nothing</Text>
        <AComponent />
      </View>
    );
  }
}
