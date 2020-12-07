import React, { Component } from 'react'
import DateContext from '../DateContext'
import config from '../config'


export default class FavoriteDatesPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = DateContext

    handleClickDelete = e => {
        e.preventDefault()
        let favorites = this.context.favorites
        const favoriteId = favorites.filter(favorite =>
            favorite.favorite_id === parseInt(this.props.match.params.favorite_id))
        console.log(favoriteId)

        fetch(`${config.API_ENDPOINT}/favorites/${favoriteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'applicatioin/json'
            }
        })
        .then(() => {
            this.context.deleteFavorite(favoriteId)
            console.log(favoriteId)
        })
        .catch((error) => {
            console.log(error)
        })
    }



    render() {
        const { favorites=[] } = this.context
        return (
            <div>
                <ul>
                    {favorites.map(favorite =>
                    <li key={favorite.favorite_id}>
                        {favorite.favorite_content}     
                        <button 
                            className='btn'
                            onClick={this.handleClickDelete}
                        >
                            Remove
                        </button>                  
                    </li>
                    )}
                </ul>                
            </div>
        )
    }
}