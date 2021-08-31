import React from 'react'
import { Switch, Route } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Signin from './components/Signin'
import Signup from './components/Signup'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  )
}

export default Routes
