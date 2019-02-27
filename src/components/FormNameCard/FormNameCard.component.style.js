import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    // alignItems: 'stretch',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },
  hr: {
    margin: 5,
    backgroundColor: 'black',
    height: 2,
  },
  date: {
    fontSize: 20,
    alignSelf: 'flex-end',
  },
});

export default styles;
