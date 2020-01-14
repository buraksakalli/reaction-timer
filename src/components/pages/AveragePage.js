import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { Fonts } from 'utils/Fonts';
import FontSize from 'utils/FontSize';
import HiddenStatusBar from 'components/atoms/hiddenstatusbar'

export class AveragePage extends Component {
  render() {
    const { result, onPress, content } = this.props;
    return (
      <TouchableHighlight onPress={onPress} style={style.body}>
        <View style={style.container}>
          <HiddenStatusBar />
          <Text style={style.title}>{content.title}</Text>
          <Text style={style.title}>{result} ms</Text>
          <Text style={style.description}>{content.description}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
const fontSize = FontSize.sizes();
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
    fontSize: fontSize.title,
    color: "#F0F6FB",
    textAlign: 'center'
  },
  description: {
    marginTop: 40,
    fontFamily: Fonts.Product,
    fontSize: fontSize.description,
    color: "#F0F5FA",
    textAlign: 'center'
  }
})

export default AveragePage