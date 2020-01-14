import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fonts } from 'utils/Fonts';
import HiddenStatusBar from 'components/atoms/hiddenstatusbar'

export class WaitYellow extends Component {
  navigatePage = (target) => {
    const { navigation } = this.props;
    navigation.replace(target)
  }

  componentDidMount() {
    let delay = Math.floor(Math.random() * (3000 - 1000) ) + 1000;
    console.log(delay);
    
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.replace("ClickPage")
    }, delay);
  }

  render() {
    return (
      <View style={style.body}>
        <HiddenStatusBar />
        <View style={style.container}>
          <Text style={style.title}>...</Text>
          <Text style={style.description}>Wait for yellow</Text>
        </View>
      </View>
    )
  }
}

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
    fontSize: 70,
    color: "#F0F6FB",
    textAlign: 'center'
  },
  description: {
    marginTop: 40,
    fontFamily: Fonts.Product,
    fontSize: 36,
    color: "#F0F5FA",
    textAlign: 'center'
  }
})

export default WaitYellow
