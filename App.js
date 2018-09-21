import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StickyNote from './StickyNote';
import uuidv4 from 'uuid/v4'
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    StickyNoteList: [],
  };
   addStickyNote = () => {
    const stickyNoteList = this.state.StickyNoteList;
    const uuid = uuidv4();
    stickyNoteList.push(
      <StickyNote key={uuid} />
    );
    this.setState({ StickyNoteList: stickyNoteList });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.StickyNoteList}
        </ScrollView>
        <Button
          title="＋"
          onPress={this.addStickyNote}
          buttonStyle={styles.addButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  scrollContainer: {
    marginTop: 10
  },
  addButton: {
    width: 50,
    height: 50,
    left: 20,
    bottom: 20,
    position: 'absolute',
    borderRadius: 50,
  },
});