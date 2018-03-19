import React, { Component } from 'react'
import { View } from 'react-native'
import LiveChat from 'react-native-livechat'


class Messaging extends Component {
  constructor(props){
    super(props)
  }

 render() {

   return (
     <View>
       <LiveChat bubbleColor="#982D37" bubbleLeft={0} bubbleTop={0} license={9599860} />
     </View>
   )
 }


}


export default Messaging
