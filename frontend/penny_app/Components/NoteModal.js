import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput, TouchableOpacity} from 'react-native';

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
    const { textStyle, textInputStyle, saveButtonStyle, saveTextStyle } = styles
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
              <TextInput
                style={textInputStyle}
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                multiline = {true}
                editable = {true}
                maxLength = {300}
              />
              <TouchableOpacity style={styles.saveButtonStyle}
                onPress={() => {
                this.setModalVisible(!this.state.modalVisible)}}>
                <Text style={styles.saveTextStyle}>Save Notes</Text>
              </TouchableOpacity>
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
  },
  textInputStyle:{
    borderWidth: 1,
    borderColor:'black',
    marginLeft: 20,
    marginRight:20,
    marginTop: 10,
    minHeight:200
  },
  saveButtonStyle:{
    alignSelf: 'stretch',
    backgroundColor: '#982D37',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#982D37',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30
  },
  saveTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  }
}
export default NoteModal
