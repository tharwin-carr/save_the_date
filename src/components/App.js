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

  componentDidMount() {    
      fetch(`${config.API_ENDPOINT}/dates`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then((res) => {
        if(!res.ok) {
          throw new Error(res.status)
        }
      return res.json()
      })
      .then(this.setState({
        dates
      }))
      .catch((error) => this.setState({ error }))
      
  }

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