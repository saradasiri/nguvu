
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Public/Header"
import { Switch ,Route } from "react-router-dom"
import GetLeaners from './components/GetLeaners';
import OneLearner from './components/OneLearner';
import Login from './components/Login'

export default function App() {
  return (
    <div>    
        <Header />
        <Switch>
            <Route exact path = "/" component={Login} />
            <Route exact path="/getlearners" component={GetLeaners} />
            <Route path="/learner/:learnerId" component={OneLearner} />                     
          </Switch>         
    </div>)
}
