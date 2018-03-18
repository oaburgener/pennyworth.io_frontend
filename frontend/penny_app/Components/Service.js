import React, { Component } from 'react'
import {
 View,
 StyleSheet,
 Text,
 TouchableOpacity,
 Switch,
 ScrollView,
 Modal
} from 'react-native'
import NoteContainer from '../Containers/NoteContainer'

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
   }
  }

  componentDidMount() {
    this.props.getServices()
  }

  toggleSwitch = (id) => {
    this.setState({[id]: !this.state[id]})
  }

 render() {

   return (
     <View>
       {this.props.services.map((service, index) => {

         return(
           <ScrollView>
             <View style={styles.serviceContainer}>
               <Text style={styles.serviceStyle}>{service.label}</Text>
               <Switch style={styles.toggle}
                 onTintColor='#982D37'
                 onValueChange={() => this.toggleSwitch(service.id)}
                 value={this.state[service.id]}/>
              </View>
              <View style={styles.notesContainer}>
                <NoteContainer serviceId={ service.id }></NoteContainer>
              </View>
           </ScrollView>
          )
       })}
     </View>
   )
 }
}

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 9,
    marginBottom: 12,
  },
  serviceStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  notesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '70%',
  },
  notes: {
    color: '#A1A1A5',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  notesText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 15,
  },
  toggle: {
    position: 'absolute',
    marginLeft: 275,
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

export default Service
