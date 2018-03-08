import React, { Component } from 'react'
import {
 View,
 StyleSheet,
 Text,
 TouchableOpacity,
 Switch,
 ScrollView,
} from 'react-native'
import Service from './Service'

class ServiceContainer extends Component {
 constructor(props) {
   super(props)
   this.state = {
   }
 }

 render() {
   return (
     <View>
       <ScrollView>
         <Service></Service>
       </ScrollView>
       <View>
         <TouchableOpacity style={styles.submitButtonStyle}>
           <Text style={styles.submitTextStyles}>Update</Text>
         </TouchableOpacity>
       </View>
     </View>
   )
 }
}

const styles = StyleSheet.create({
   submitButtonStyle: {
     alignSelf: 'stretch',
     backgroundColor: '#982D37',
     borderRadius: 7,
     borderWidth: 1,
     borderColor: '#982D37',
     marginLeft: 40,
     marginRight: 40,
     marginTop: 400,
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

export default ServiceContainer
