import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../css/app.css'
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import DatesPage from './DatesPage'
import AddDate from './AddDate'
import DateContext from '../DateContext'
import config from '../config'
import FavoriteDatesPage from './FavoriteDatesPage'

export default class App extends Component {
  state = {
      dates: [],
      favorites: []
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/dates`),
      fetch(`${config.API_ENDPOINT}/favorites`)
    ])
      .then(([datesRes, favoritesRes]) => {
        if(!datesRes.ok)
          return datesRes.json().then(e => Promise.reject(e))
        if(!favoritesRes.ok)
          return favoritesRes.json().then(e => Promise.reject(e))

          return Promise.all([datesRes.json(), favoritesRes.json()])
      })
      .then(([dates, favorites]) => {
        this.setState({dates, favorites})
      })
      .catch(error => {
        console.error({error})
      })
  }



  deleteFavorite = favorite_id => {
    this.setState({
      favorites: this.state.favorites.filter(favorite => favorite.id !== favorite_id)
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
      favorites: this.state.favorites,
      addDate: this.addDate,
      favoriteDate: this.favoriteDate,
      deleteFavorite: this.deleteFavorite
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
              <Route path='/favorites' component={FavoriteDatesPage} />
            </Switch>
          </main>
      </div>      
      </DateContext.Provider>  
    )
  }
}