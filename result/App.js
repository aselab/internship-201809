import * as React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import StickyNote from './StickyNote';
import uuidv4 from 'uuid/v4';
import { Button } from 'react-native-elements';
import moment from 'moment';

export default class App extends React.Component {
  state = {
    StickyNoteList: []
  }

  deleteStickyNote = uuid => {
    const stickyNoteList = this.state.StickyNoteList;
    const newList = stickyNoteList.filter(note => note.component.key != uuid);
    this.setState({ StickyNoteList: newList });
  }

  sortTime = (uuid, dateTime) => {
    const newList = this.state.StickyNoteList;
    newList.find(note => note.component.key === uuid).toDateTime = dateTime;
    
   
    newList.sort(function(a,b) {
      return (moment(a.toDateTime).unix() - moment(b.toDateTime).unix());
    
    });
    this.setState({ StickyNoteList: newList });
  };

  addStickyNote = () => {
    const stickyNoteList = this.state.StickyNoteList;
    const uuid = uuidv4();
    stickyNoteList.push({
      component: <StickyNote key={uuid} uuid={uuid} sortTime={this.sortTime} deleteStickyNote={this.deleteStickyNote} />,
      toDateTime:moment()    
    });
    this.setState({ StickyNoteList: stickyNoteList });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.StickyNoteList.map(note => note.component)}
        </ScrollView>
        <Button
          title="＋"
          onPress={this.addStickyNote}
          buttonStyle={styles.addButton}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  scrollContainer: {
    marginTop: 10,
    paddingBottom: 20
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