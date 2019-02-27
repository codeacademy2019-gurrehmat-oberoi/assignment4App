import React, { Component } from 'react';
import {
  SafeAreaView, TextInput, Button, ScrollView,
} from 'react-native';
// import console = require('console');
// import { ScrollView } from 'react-native-gesture-handler';

class CreateFormPage extends Component {
  state = {
    title: '',
    fields: [],
    textFields: [],
  }

  handleChangeFormName = formname => this.setState({ title: formname });

  handleSubmit = () => {
    const { fields, textFields } = this.state;
    const { navigation } = this.props;
    console.log(fields, textFields);
    // this.setState({ fields: textFields.map(target => target.value);
    navigation.navigate('HomePage');
  }

  render() {
    const { title, textFields } = this.state;
    return (
      <SafeAreaView style={{ backgroundColor: 'aqua' }}>
        <TextInput placeholder="Form Name" value={title} onChangeText={this.handleChangeFormName} />
        <Button
          title="Add Field"
          onPress={
          () => this.setState({ textFields: textFields.concat(<TextInput onChangeText={text => this.setState({})} />) })}
        />
        <ScrollView>
          {textFields}
        </ScrollView>
        <Button
          title="submit"
          style={{
            position: 'absolute',
            bottom: 0,
          }}
          onPress={() => {
            this.handleSubmit();
            console.log(this.state);
          }}
        />
      </SafeAreaView>
    );
  }
}
export default CreateFormPage;
