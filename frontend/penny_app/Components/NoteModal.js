import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput, TouchableOpacity} from 'react-native';

class NoteModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      notes: ''
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  componentDidMount() {
    this.props.getUserId()
    this.setModalVisible(true)
  }

  setNotes() {
    this.props.getNotes(this.state.notes)
    this.props.getServiceId(this.props.serviceId)
    this.setModalVisible(!this.state.modalVisible)
    this.props.postService({
      date: this.props.date,
      notes: this.state.notes,
      user_id: this.props.user_id,
      service_id: this.props.serviceId,
    })
  }

  render() {
    const { textStyle, textInputStyle, saveButtonStyle, saveTextStyle } = styles

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <Text style={styles.header}>{`${this.props.serviceLabel} Details`}</Text>
          <View>
            <View>
              <TextInput
                style={styles.textInputStyle}
                placeholder='Jot down any notes for your Pennyworker here.'
                placeholderTextColor='#a2a3a5'
                {...this.props}
                multiline = {true}
                editable = {true}
                maxLength = {300}
                onChangeText={(notes) => this.setState({notes})}
              />
              <TouchableOpacity style={styles.saveButtonStyle}
                onPress={() => {
                  this.setNotes()
                }}>
                <Text style={styles.saveTextStyle}>Save Notes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
const styles = {
  textStyle: {
    color:'#982D37'
  },
  header: {
    textAlign: 'center',
    color: '#5f6063',
    fontSize: 20,
    paddingTop: 80,
    fontWeight: 'bold',
  },
  textInputStyle:{
    fontSize: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
    minHeight: 300,
    color:'#5f6063'
  },
  saveButtonStyle: {
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
