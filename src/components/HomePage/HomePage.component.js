import React, { Component } from 'react';
import {
  SafeAreaView, Platform, View, Button,
} from 'react-native';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './HomePage.component.style';
import FormNameCard from '../FormNameCard/FormNameCard.component';
// import console = require('console');

class HomePage extends Component {
  state = {
    forms: [],
  }

  async componentDidMount() {
    // console.log('yo');

    const response = await axios.get(`http://${(Platform.OS) === 'ios' ? 'localhost' : '10.0.2.2'}:8080/forms`);
    console.log(response);
    this.setState({ forms: response.data });
  }

  handleButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreateFormPage');
  }

  render() {
    const { forms } = this.state;
    // console.log(this.state);
    const cards = forms.map(form => (
      <FormNameCard
        title={form.title}
        date={form.createdAt}
        key={form.createdAt}
      />
    ));
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {cards}
        </ScrollView>
        <View style={styles.fab}>
          <Button title="+" onPress={this.handleButtonPress} />
        </View>
      </SafeAreaView>

    );
  }
}

export default HomePage;
