import React , { Component } from 'react';
import moment from 'moment';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class StickyNote extends Component {
  state = {
    isDateTimePickerVisible1: false,
     isDateTimePickerVisible2: false,
    limitDateTime1: moment().format('YYYY年MM月DD日 HH時mm分'),
    limitDateTime2: moment().format('YYYY年MM月DD日 HH時mm分')
  }

  showDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: true });
  hideDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: false });
  showDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: true });
  hideDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: false });

  setDateTime = dateTime =>
    this.setState({
      limitDateTime1: moment(dateTime).format('YYYY年MM月DD日 HH時mm分'),
    })

  setDateTime2 = dateTime =>
    this.setState({
      limitDateTime2: moment(dateTime).format('YYYY年MM月DD日 HH時mm分')
    })
    
  render() {
    return (
      <Card
        containerStyle={styles.card}
        title={<TextInput
          placeholder="タイトルを入力"
          placeholderTextColor="#7c7c7c"
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />}
      >
        <Button
          title="×"
          buttonStyle={styles.deleteButton}
          onPress={() => this.props.deleteStickyNote(this.props.uuid)}
        />
        <TextInput
          placeholder="内容を入力"
          placeholderTextColor="#7c7c7c"
          multiline
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />
        <View style={styles.datetimeContainer}>
          <Text>期限1：</Text>
          <Text onPress={() => {
            this.showDateTimePicker1()
          }}>
          
            {this.state.limitDateTime1}
          </Text>
        </View>
        <View style={styles.datetimeContainer}>
          <Text>期限2：</Text>
          <Text onPress={() => {
            this.showDateTimePicker2()
          }}>
  
            {this.state.limitDateTime2}
          </Text>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible1}
          mode={'datetime'}
          onConfirm={dateTime => {
            this.setDateTime(dateTime);
            this.hideDateTimePicker1();
          }}
          onCancel={this.hideDateTimePicker1}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible2}
          mode={'datetime'}
          onConfirm={dateTime => {
            this.setDateTime2(dateTime);
            this.hideDateTimePicker2();
            this.props.sortTime(this.props.uuid, dateTime);
          }}
          onCancel={this.hideDateTimePicker2}
        />
         
      </Card>
    );
  }
}
 const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f99a',
  },
  deleteButton: {
    backgroundColor: '#EFD032',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 30,
    width: 30,
    borderRadius: 30
  },
  datetimeContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
}); 