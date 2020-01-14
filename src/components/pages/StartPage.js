import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { Fonts } from 'utils/Fonts';
import HiddenStatusBar from 'components/atoms/hiddenstatusbar'

class StartPage extends Component {
  navigatePage = (target) => {
    const { navigation } = this.props;
    navigation.replace(target)
  }
  render() {
    return (
      <TouchableHighlight onPress={() => { this.navigatePage('WaitYellow') }} style={style.body}>
        <View style={style.container}>
          <HiddenStatusBar />
          <Text style={style.title}>Reaction Time Test</Text>
          <Text style={style.description}>When the blue box turns yellow, click as quickly as you can. Click anywhere to start</Text>
        </View>
      </TouchableHighlight >
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
    color: "#F0F6FB"
  },
  description: {
    marginTop: 40,
    fontFamily: Fonts.Product,
    fontSize: 20,
    color: "#F0F5FA"
  }
})

export default StartPage
