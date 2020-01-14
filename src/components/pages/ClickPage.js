import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { Fonts } from 'utils/Fonts';
import HiddenStatusBar from 'components/atoms/hiddenstatusbar'
import FontSize from 'utils/FontSize';

let timer;
export class ClickPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 0
    }
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
    const { content, onPress } = this.props;
    return (
      <TouchableHighlight onPress={() => {
        clearInterval(timer);
        if (onPress) {
          onPress(this.state.time);
        }
      }
      } style={style.body}>
        <View style={style.container}>
          <HiddenStatusBar />
          <Text style={style.title}>...</Text>
          <Text style={style.description}>{content}</Text>
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

export default ClickPage;