import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Login from './Components/Login'
import ServicePage from './Components/ServicePage'
import CardContainer from './Containers/CardContainer'
import SignUp from './Components/SignUp'
import Schedule from './Components/Schedule'


const RouterComp = () => {
  return (
    <Router>
      <Scene key="root" >

          <Scene key="login" component={Login} hideNavBar initial/>

          <Scene key="signup" component={SignUp} />

          <Scene key="services" component={ServicePage} title="Services" />

          <Scene key="card" component={CardContainer} title="Scheduled" />

      </Scene>
    </Router>
  )
}

export default RouterComp
