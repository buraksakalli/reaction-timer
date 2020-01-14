import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { Fonts } from 'utils/Fonts';
import FontSize from 'utils/FontSize';
import HiddenStatusBar from 'components/atoms/hiddenstatusbar'

let timer;
export class WaitYellow extends Component {
  componentDidMount() {
    let delay = Math.floor(Math.random() * (3000 - 1000)) + 1000;
    const { onCompleted } = this.props;
    timer = setTimeout(() => {
      onCompleted();
    }, delay);
  }

  cheatDetected = () => {
    clearInterval(timer);
    this.props.onPress();
  }
  render() {
    const { content } = this.props;
    return (
      <TouchableHighlight onPress={() => { this.cheatDetected() }} style={style.body}>
        <View style={style.body}>
          <View style={style.container}>
            <HiddenStatusBar />
            <Text style={style.title}>...</Text>
            <Text style={style.description}>{content.wait}</Text>
          </View>
          <Text style={style.tries}>
            Tries | {content.turn + 1} of 5
          </Text>
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
    backgroundColor: "#289BDD",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginLeft: 60,
    marginRight: 60
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
  },
  tries: {
    textAlign: 'center',
    color: "#F0F5FA",
    position: 'absolute',
    bottom: 40,
    fontFamily: Fonts.Product,
    fontSize: fontSize.tries
  }
})

export default WaitYellow