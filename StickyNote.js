import React, { Component } from 'react';
import moment from 'moment';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class StickyNote extends Component {
  state = {
    isDateTimePickerVisible: false,
    limitDateTime: moment().format('YYYY年MM月DD日 HH時mm分')
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  setDateTime = dateTime =>
    this.setState({
      limitDateTime: moment(dateTime).format('YYYY年MM月DD日 HH時mm分'),
    });
    
  render() {
    return (
      <Card
        containerStyle={styles.card}
        title={
          <View>
            <TextInput
              placeholder="タイトルを入力"
              placeholderTextColor="#7c7c7c"
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </View>
        }>
        <TextInput
          placeholder="内容を入力"
          placeholderTextColor="#7c7c7c"
          multiline
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />
        <View style={styles.datetimeContainer}>
          <Text>期限：</Text>
          <Text onPress={this.showDateTimePicker}>
            {this.state.limitDateTime}
          </Text>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          mode={'datetime'}
          onConfirm={dateTime => {
            this.setDateTime(dateTime);
            this.hideDateTimePicker();
          }}
          onCancel={this.hideDateTimePicker}
        />
      </Card>
    );
  }
}
 const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f99a',
  },
  datetimeContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
});