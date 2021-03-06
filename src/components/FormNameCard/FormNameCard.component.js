import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './FormNameCard.component.style';

class FormNameCard extends Component {
  render() {
    const {
      title,
      date,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.hr} />
        <Text style={styles.date}>{`Created on: ${date}`}</Text>
      </View>
    );
  }
}

FormNameCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

FormNameCard.defaultProps = {
  title: 'Default Title',
  date: new Date(2019, 1, 1),
};

export default FormNameCard;
