import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Login from './Components/Login'
import ServiceContainer from './Components/ServiceContainer'
import Card from './Components/Card'
import SignUp from './Components/SignUp'

const RouterComp = () => {
  return (
    <Router>
      <Scene key="root" >

          <Scene key="login" component={Login} hideNavBar initial/>

          <Scene key="services" component={ServiceContainer} title="Services" />

          <Scene key="pennyworker" component={Card} title="Scheduled" />

      </Scene>
    </Router>
  )
}

export default RouterComp
