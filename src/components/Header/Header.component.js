import {
  View, Text,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.component.style';

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'Default Header Title',
};
export default Header;
