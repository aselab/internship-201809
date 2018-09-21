import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import StickyNote from './StickyNote';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StickyNote />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  }
});