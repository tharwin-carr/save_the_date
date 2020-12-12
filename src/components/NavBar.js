import React from 'react'
import NavDatesButton from '../buttons/NavDatesButton'
import NavFavoritesButton from '../buttons/NavFavoritesButton'
import NavHomeButton from '../buttons/NavHomeButton'


export default function NavBar() {
    return (
        <div className='nav-bar__container'>
            <div className='nav-bar__header'>
                <NavHomeButton btnClass='nav-bar__title' title='Save The Date ' />             
            </div>
            
            <div className='nav-bar-links__container'>
                <NavDatesButton 
                    btnClass='nav-bar__btn' 
                    title='Dates'
                />
                <NavFavoritesButton 
                    btnClass='nav-bar__btn' 
                    title='Favorites'
                />
            </div>            
        </div>
    )
}