import React, { Component } from 'react'
import DateContext from '../DateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                <h1 className='favorites__header'>
                    Favorites:
                </h1>

                <ul className='favorites__list'>
                    {favorites.map(favorite =>
                    <li className='favorites__item' key={favorite.favorite_id}>
                        {favorite.favorite_content}     
                        <button 
                            className='btn favorites__btn'
                            type='button'
                            onClick={this.handleClickDelete}
                        >
                            <FontAwesomeIcon icon='times'/>
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