import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../css/app.css';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import DatesPage from './DatesPage'
import AddDate from './AddDate'

export default function App() {
  return (
    <div className='app__container'>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/dates' component={DatesPage} />
          <Route path='/add-date' component={AddDate} />
        </Switch>
      </main>
    </div>
  )
}