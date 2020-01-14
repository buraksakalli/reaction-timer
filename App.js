import StartPage from 'components/pages/StartPage'
import WaitYellow from 'components/pages/WaitYellow'
import ClickPage from 'components/pages/ClickPage'
import ResultPage from 'components/pages/ResultPage'
import AveragePage from 'components/pages/AveragePage'
import React, { Component } from 'react';
import { NativeModules, View, ActivityIndicator, Dimensions } from 'react-native';
import { Language } from 'utils/Language';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false,
      start: false,
      page: null,
      turn: 0, // total turn
      reactionTime: null, // last reaction time
      totalReaction: null, // total reaction time 
      content: [] // Texts of components
    }
  }

  componentDidMount() {
    console.log(Dimensions.get("window").width + "\n" + Dimensions.get("window").height);

    const locale = NativeModules.I18nManager.localeIdentifier;
    if (locale == 'tr_TR')
      this.setState({ content: Language.tr, ready: true })
    else
      this.setState({ content: Language.tr, ready: true })
  }

  initialStatus = () => {
    this.setState({
      start: false,
      page: "StartPage",
      turn: 0,
      totalReaction: 0
    })
  }

  showWaitPage = () => {
    if (this.state.turn == 2) {
      this.setState({
        start: "false",
        page: "AveragePage"
      })
    } else {
      this.setState({
        start: true,
        page: "WaitYellow",
      })
    }
  }

  showClickPage = () => {
    this.setState({
      page: "ClickPage",
      turn: this.state.turn + 1
    })
  }

  showResultPage = (reactionTime) => {
    this.setState({
      page: "ResultPage",
      reactionTime: reactionTime,
      totalReaction: this.state.totalReaction + reactionTime
    })
  }

  render() {
    if (this.state.ready) {
      return (
        !this.state.start ?
          <StartPage onPress={this.showWaitPage} content={this.state.content.start} />
          : this.state.page == "WaitYellow" ? <WaitYellow onCompleted={this.showClickPage} content={this.state.content.wait} />
            : this.state.page == "ClickPage" ? <ClickPage onPress={this.showResultPage} content={this.state.content.click} />
              : this.state.page == "ResultPage" ? <ResultPage onPress={this.showWaitPage} result={this.state.reactionTime} content={this.state.content.result} />
                : this.state.page == "AveragePage" ? <AveragePage onPress={this.initialStatus} result={this.state.totalReaction / this.state.turn} content={this.state.content.average} /> : null
      )
    } else {
      return (
        <View style={{ backgroundColor: "#01294B", display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#F0F6FB" />
        </View>
      )
    }
  }
}

export default App;