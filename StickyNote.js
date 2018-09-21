import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class StickyNote extends Component {
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
          <Text >
            2018/09/27 17:30
          </Text>
        </View>
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