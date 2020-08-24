import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from './views/home/home'
import Login from './views/login/login'
import Signup from './views/signup/signup'
import Edit from './views/editUser/editUser'
import Add from './views/addUser/addUser'
import NotFound from './views/notFound'
import { PrivateRoute } from './components/PrivateRoute'
import history from './utils/history'

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/add" exact component={Add} />
        <PrivateRoute path="/user/:id/edit" exact component={Edit} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
export default RouterComponent
