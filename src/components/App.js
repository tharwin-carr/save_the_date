import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../css/app.css'
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import DatesPage from './DatesPage'
import AddDate from './AddDate'
import DateContext from '../DateContext'
import config from '../config'
import SavedDatesPage from './SavedDatesPage'

export default class App extends Component {
  state = {
      dates: [],
      favorites: []
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/dates`)
    ])
      .then(([datesRes,]) => {
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
  }

  handleDeleteFavoriteDate = favoriteDate_id => {
    this.setState({
      favorites: this.state.favorites.filter(date => date.id !== favoriteDate_id)
    })
  }

  addDate = date => {
    this.setState({
      dates: [...this.state.dates, date]
    })
  }

  favoriteDate = favoriteDate => {
    this.setState({
      favorites: [...this.state.favorites, favoriteDate]
    })
  }
  
  render() {
    const dateContextValue = {
      dates: this.state.dates,
      savedDates: this.state.savedDates,
      addDate: this.addDate,
      favoriteDate: this.favoriteDate,
      deleteFavorite: this.handleDeleteFavoriteDate
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
              <Route path='/favorites' component={SavedDatesPage} />
            </Switch>
          </main>
      </div>      
      </DateContext.Provider>  
    )
  }
}