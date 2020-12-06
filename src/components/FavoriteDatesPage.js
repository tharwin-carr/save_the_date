import React, { Component } from 'react'
import DateContext from '../DateContext'
import config from '../config'


export default class FavoriteDatesPage extends Component {
    static contextType = DateContext
    static defaultProps = {
        match: {
            params:{}
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            dates: [],
            favorites: []
        }
    }

    compnentDidMount() {

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
                this.setState({
                    dates, favorites
                })
            })
            .catch(error => {
                console.error({error})
            })         
    }

    static contextType = DateContext
    render() {
        let favorites = this.state.favorites
        return (
            <div>
                <ul>
                    {favorites.map(favorite =>
                    <li key={favorite.id}>
                        {this.state.favorites.content}                        
                    </li>
                    )}
                </ul>
                
            </div>
        )
    }
}