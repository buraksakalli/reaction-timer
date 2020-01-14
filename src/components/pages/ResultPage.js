import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { Fonts } from 'utils/Fonts';

export class ResultPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: 0
    }
  }

  navigatePage = (target) => {
    const { navigation } = this.props;
    navigation.replace(target)
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      result: navigation.getParam('result', null)
    });
  }
  render() {
    return (
      <TouchableHighlight onPress={() => { this.navigatePage('Home') }} style={style.body}>
        <View style={style.container}>
          <Text style={style.title}>🕑</Text>
          <Text style={style.title}>{this.state.result} ms</Text>
          <Text style={style.description}>Click to keep going</Text>
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
  description: {
    marginTop: 40,
    fontFamily: Fonts.Product,
    fontSize: 34,
    color: "#F0F5FA",
    textAlign: 'center'
  }
})

export default ResultPage
