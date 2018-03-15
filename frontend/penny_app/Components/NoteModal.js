import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

class NoteModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render() {
    const { textStyle } = styles
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={textStyle}>Click Here To Makes Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = {
  textStyle:{
    color:'#982D37'
  }
}
export default NoteModal
