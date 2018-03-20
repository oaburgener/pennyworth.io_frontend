import React, { Component } from 'react'
import { View } from 'react-native'
import LiveChat from 'react-native-livechat'

class Messaging extends Component {

 render() {

   return (
     <View style={{position:'absolute'}} >
       <LiveChat bubbleColor="#982D37" bubbleLeft={0} bubbleTop={0} license={9599860} />
     </View>
   )
 }

}

export default Messaging
