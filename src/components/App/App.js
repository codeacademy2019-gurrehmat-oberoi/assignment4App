import React, { Component } from 'react';
// import Routes from '../../routes';
import { SafeAreaView } from 'react-native';
import FormNameCard from '../FormNameCard/FormNameCard.component';
import Header from '../Header/Header.component';

export default class App extends Component {
  render() {
    return (
      // <Routes />
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <Header />
        <FormNameCard />
      </SafeAreaView>
    );
  }
}
