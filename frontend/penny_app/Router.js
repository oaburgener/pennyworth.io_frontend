import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Login from './Components/Login'
import ServicePage from './Components/ServicePage'
import CardContainer from './Containers/CardContainer'
import SignUp from './Components/SignUp'
import dateTimeContainer from './Containers/DateTimeContainer'


const RouterComp = () => {
  return (
    <Router>
      <Scene key="root" >

          <Scene key="login" component={Login} hideNavBar initial/>

          <Scene key="signup" component={SignUp} />

          <Scene key="services" component={ServicePage} title="Services" />

          <Scene key="dateTime" component={dateTimeContainer} title="Schedule" />

          <Scene key="card" component={CardContainer} title="Scheduled" leftTitle="Schedule New" onLeft={() => { Actions.dateTime() }}/>

      </Scene>
    </Router>
  )
}

export default RouterComp
