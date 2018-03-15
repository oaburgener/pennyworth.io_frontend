import React, { Component } from 'react'
import {
 DatePickerIOS,
 View,
 StyleSheet,
 Text,
 TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import NoteContainer from '../Containers/NoteContainer'

class Schedule extends Component {
 constructor(props) {
   super(props)
   this.state = {
     chosenDate: new Date()
   }
   this.setDate = this.setDate.bind(this)
 }

 componentDidMount() {
   this.props.getDateTime()
 }

 setDate(newDate) {
   this.setState({
     chosenDate: newDate
   })
 }

 render() {
   return (
     <View>
       <Text style={styles.headerStyle}>{"Schedule"}</Text>
       <Text style={styles.paragraphStyle}>{"Select day of week and time slot."}</Text>
       <View style={styles.container}>
         <DatePickerIOS
           date={this.state.chosenDate}
           onDateChange={this.setDate}
         />
       </View>
       <TouchableOpacity style={styles.submitButtonStyle}>
         <Text style={styles.submitTextStyles} onPress={() => Actions.services() }>Continue</Text>
       </TouchableOpacity>
     </View>
   )
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center'
 },
 headerStyle: {
   color: 'black',
   fontSize: 32,
   fontWeight: 'bold',
   paddingTop: 70,
   paddingLeft: 40,
   paddingBottom: 20,
 },
 paragraphStyle: {
   color: 'black',
   fontSize: 20,
   fontWeight: 'bold',
   paddingLeft: 40,
   paddingBottom: 70,
 },
 submitButtonStyle: {
   alignSelf: 'stretch',
   backgroundColor: '#982D37',
   borderRadius: 7,
   borderWidth: 1,
   borderColor: '#982D37',
   marginLeft: 40,
   marginRight: 40,
   marginTop: 350,
 },
 submitTextStyles: {
   alignSelf: 'center',
   color: '#fff',
   fontSize: 16,
   fontWeight: '600',
   paddingTop: 15,
   paddingBottom: 15
 },
})

export default Schedule
