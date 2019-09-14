import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import _ from 'lodash';

import MainPage from './Component/Mainpage';
import LoginPage from './Component/Login';
import HomePage from './Component/Home';
import PlayPage from './Component/PlayPage';
import ModePage from './Component/ModePage';
import HighScorePage from './Component/HighScore';
import Game from './Component/Game';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const MainStackNavigator = createStackNavigator(
  {
    MainPage,
    LoginComp: LoginPage,
    HomePage : HomePage,
    PlayPage : PlayPage,
    ModePage : ModePage,
    HighScorePage : HighScorePage,
    StartGame : Game
})

const NavigationApp = createAppContainer(MainStackNavigator);

export default NavigationApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
