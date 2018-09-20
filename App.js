import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Hello world.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 24,
  }
});