import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
//import { v4 as uuidv4 } from 'uuid'
import '../css/app.css';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import DatesPage from './DatesPage'
import AddDate from './AddDate'
import sampleDates from './SampleDates'
import DateContext from '../DateContext'

export default class App extends Component {
  state = {
      sampleDates
  }

  /*handleDateAdd = date => {
    this.setState({
      sampleDates: [...this.state.sampleDates, date]      
    })   
  }*/

  render() {
    const dateContextValue = {
      sampleDates: this.state.sampleDates,
      handleDateAdd: this.handleDateAdd
    }
    return (
      <DateContext.Provider value= {dateContextValue}>
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
      </DateContext.Provider>  
    )
  }
}