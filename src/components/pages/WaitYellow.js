import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fonts } from 'utils/Fonts';
import FontSize from 'utils/FontSize';
import HiddenStatusBar from 'components/atoms/hiddenstatusbar'

export class WaitYellow extends Component {
  componentDidMount() {
    let delay = Math.floor(Math.random() * (3000 - 1000)) + 1000;
    const { onCompleted } = this.props;
    setTimeout(() => {
      onCompleted();
    }, delay);
  }

  render() {
    const { content } = this.props;
    return (
      <View style={style.body}>
        <HiddenStatusBar />
        <View style={style.container}>
          <Text style={style.title}>...</Text>
          <Text style={style.description}>{content}</Text>
        </View>
      </View>
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

export default WaitYellow