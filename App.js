
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
