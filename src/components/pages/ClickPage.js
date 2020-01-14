import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { Fonts } from 'utils/Fonts';
import HiddenStatusBar from 'components/atoms/hiddenstatusbar'
import { withNavigation } from 'react-navigation';

let timer;
export class ClickPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 0
    }
  }

  screenPressed = (result) => {
    const { navigation } = this.props;
    navigation.push('ResultPage', {
      result: result
    });
  }

  componentDidMount() {
    var startTime = Date.now();

    timer = setInterval(() => {
      this.setState({
        time: Date.now() - startTime
      })
    }, 100);
  }

  render() {
    return (
      <TouchableHighlight onPress={() => { clearInterval(timer); this.screenPressed(this.state.time) }} style={style.body}>
        <View style={style.container}>
          <HiddenStatusBar />
          <Text style={style.title}>...</Text>
          <Text style={style.description}>Click</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
const style = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    backgroundColor: "#FAD250",
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

export default withNavigation(ClickPage)