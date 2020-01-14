import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { Fonts } from 'utils/Fonts';

export class AveragePage extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => { }} style={style.body}>
        <View style={style.container}>
          <Text style={style.title}>Average</Text>
          <Text style={style.result}>290ms</Text>
          <Text style={style.description}>Click to restart</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
const style = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    backgroundColor: "#01294B",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginLeft: 60,
    marginRight: 60,
  },
  title: {
    fontFamily: Fonts.ProductBold,
    fontSize: 70,
    color: "#F0F6FB",
    textAlign: 'center'
  },
  result: {
    fontFamily: Fonts.ProductBold,
    fontSize: 70,
    color: "#289BDD",
    textAlign: 'center'
  },
  description: {
    marginTop: 40,
    fontFamily: Fonts.Product,
    fontSize: 34,
    color: "#F0F5FA",
    textAlign: 'center'
  }
})

export default AveragePage
