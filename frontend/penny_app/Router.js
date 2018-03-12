import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Login from './Components/Login'
import ServicePage from './Components/ServicePage'
import Card from './Components/Card'
import SignUp from './Components/SignUp'
import Schedule from './Components/Schedule'


const RouterComp = () => {
  return (
    <Router>
      <Scene key="root" >

          {/* <Scene key="login" component={ServiceContainer} hideNavBar initial/> */}

          <Scene key="services" component={ServicePage} title="Services" />

          <Scene key="pennyworker" component={Card} title="Scheduled" />

      </Scene>
    </Router>
  )
}

export default RouterComp
