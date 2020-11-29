import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../css/app.css'
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import DatesPage from './DatesPage'
import AddDate from './AddDate'
import DateContext from '../DateContext'
import config from '../config'

export default class App extends Component {
  state = {
      dates: []
  }

  /*componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/dates`)
    ])
      .then(([datesRes]) => {
        if(!datesRes.ok)
        return datesRes.json().then(e => Promise.reject(e))

        return Promise.all([datesRes.json()])
      })
      .then(([dates]) => {
        this.setState({dates})
      })
      .catch(error => {
        console.error({error})
      })
  }*/

  addDate = date => {
    this.setState({
      dates: [...this.state.dates, date]
    })
  }
  
  render() {
    const dateContextValue = {
      dates: this.state.dates,
      addDate: this.addDate
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