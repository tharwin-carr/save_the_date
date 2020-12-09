import React, { Component } from 'react'
import DateContext from '../DateContext'
import config from '../config'
import PropTypes from 'prop-types'

export default class FavoriteDatesPage extends Component {
    static defaultProps = {
        onDeleteFavorite: () => {},
        match: {
            params: {}
        }
    }
    static contextType = DateContext

    handleClickDelete = e => {
        e.preventDefault()

        const favoriteId = this.props.match.params
        console.log(favoriteId)

        fetch(`${config.API_ENDPOINT}/favorites/${favoriteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'applicatioin/json'
            }
        })
        .then(() => {
            this.context.deleteFavorite(favoriteId)
            this.props.onDeleteFavorite(favoriteId)
            console.log(favoriteId)
        })
        .catch((error) => {
            console.log(error)
        })
    }



    render() {
        let favorites = this.context.favorites
        return (
            <div className='favorites__container'>
                <ul className='favorites__list'>
                    {favorites.map(favorite =>
                    <li key={favorite.favorite_id}>
                        {favorite.favorite_content}     
                        <button 
                            className='btn'
                            type='button'
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

FavoriteDatesPage.propTypes = {
    onDeleteFavorite: PropTypes.func
}