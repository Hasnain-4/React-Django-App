import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Dashboard from './Dashboard'
import Error from './Error'
import Home from './Home'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <>
    <Nav />
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/dashboard' component={Dashboard}/>
        <Route path = '/about' component={About}/>
        <Route path = '/contact' component={Contact}/>
        <Route component={Error}/>
      </Switch>
    </>
  )
}

export default App
