import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartPage from 'components/pages/StartPage'
import WaitYellow from 'components/pages/WaitYellow'
import ClickPage from 'components/pages/ClickPage'
import ResultPage from 'components/pages/ResultPage'
import AveragePage from 'components/pages/AveragePage'

const AppNavigator = createStackNavigator(
  {
    Home: StartPage,
    WaitYellow: WaitYellow,
    ClickPage: ClickPage,
    ResultPage: ResultPage,
    AveragePage: AveragePage
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const App = createAppContainer(AppNavigator);

export default App
