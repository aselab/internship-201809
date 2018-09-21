import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class StickyNote extends Component {
  render() {
    return (
      <Card
        containerStyle={styles.card}
        title="今日の目標"
      >
        <Text >
          付箋アプリを完成させる。
        </Text>
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
    flexDirection: 'row',
  },
});