import React, { Component } from 'react'
import {
 DatePickerIOS,
 View,
 StyleSheet,
 Text,
 TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getDateTime } from '../actions/dateTime'

class Schedule extends Component {
 constructor(props) {
   super(props)
   this.state = {
     chosenDate: new Date(),
   }
   this.setDate = this.setDate.bind(this)
 }

 setDate(newDate) {
   this.setState({
     chosenDate: newDate
   })
 }

 sendDate() {
   this.props.getDateTime(this.state.chosenDate)
   Actions.services()
 }

 render() {
   return (
     <View style={styles.viewContainer}>
       <Text style={styles.headerStyle}>{"Schedule"}</Text>
       <Text style={styles.paragraphStyle}>{"Select day of week and time slot."}</Text>
       <View>
         <DatePickerIOS
           date={this.state.chosenDate}
           onDateChange={this.setDate}
           timeZoneOffsetInMinutes={(new Date()).getTimezoneOffset()*-1}
         />
       </View>
       <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.submitButtonStyle} onPress={this.sendDate.bind(this)}>
           <Text style={styles.submitTextStyles}>Continue</Text>
         </TouchableOpacity>
       </View>
     </View>
   )
 }
}

const styles = StyleSheet.create({
viewContainer: {
  backgroundColor: 'white',
  flex: 1,
},
 headerStyle: {
   color: 'black',
   fontSize: 32,
   fontWeight: 'bold',
   paddingLeft: 40,
   paddingBottom: 20,
   justifyContent: 'center',
   marginTop: 40,
 },
 paragraphStyle: {
   color: 'black',
   fontSize: 20,
   fontWeight: 'bold',
   paddingLeft: 40,
   paddingBottom: 70,
   justifyContent: 'center',
 },
 submitButtonStyle: {
   alignSelf: 'stretch',
   backgroundColor: '#982D37',
   borderRadius: 7,
   borderWidth: 1,
   borderColor: '#982D37',
   marginLeft: 40,
   marginRight: 40,
   marginBottom: 20,
 },
 submitTextStyles: {
   alignSelf: 'center',
   color: '#fff',
   fontSize: 16,
   fontWeight: '600',
   paddingTop: 15,
   paddingBottom: 15
 },
 buttonContainer: {
   borderTopWidth: 1,
   borderColor: '#e0e0e0',
   paddingTop: 20,
   backgroundColor: '#efefef',
   justifyContent: 'flex-end',
   marginBottom: 10,
   marginTop: 100
 },
})

export default Schedule
