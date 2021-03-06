import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Login from './Components/Login'
import ServicePage from './Components/ServicePage'
import CardContainer from './Containers/CardContainer'
import SignUp from './Components/SignUp'
import Payment from './Components/Payment'
import dateTimeContainer from './Containers/DateTimeContainer'
import dollarSign from './assets/dolladollabillyall.png'
import bowTie from './assets/bowtie.png'
import Messaging from './Components/Messaging'

const RouterComp = () => {
  return (
    <Router>
      <Scene key="root" >

          <Scene key="login" component={Login} hideNavBar initial />

          <Scene key="signup" component={SignUp} />

          <Scene key="services" component={ServicePage} title="Services" />

          <Scene key="dateTime" component={dateTimeContainer} hideNavBar />

          <Scene key='payment' component={Payment} title='Payment' />

          <Scene key='messaging' component={Messaging}  />

          <Scene key="card" component={CardContainer} title="Scheduled"
            leftButtonImage={bowTie}
            leftButtonStyle={{ marginLeft: 5 }}
            onLeft={() => { Actions.dateTime() }}

            rightButtonImage={dollarSign}
            rightButtonStyle={{ marginRight: -185 }}
            onRight={() => { Actions.payment() }}/>

      </Scene>
    </Router>
  )
}

export default RouterComp
