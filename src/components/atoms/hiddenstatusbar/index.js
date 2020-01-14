import React, { Component } from 'react'
import { StatusBar } from 'react-native'

export class HiddenStatusBar extends Component {
  render() {
    return (
      <StatusBar hidden={true} barStyle="dark-content"></StatusBar>
    )
  }
}

export default HiddenStatusBar