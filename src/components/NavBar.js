import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'


export default function NavBar() {
    return (
        <div className='nav-bar__container'>
            <div className='nav-bar__header'>
                <Link to='/' className='nav-bar__title'>
                    Save The Date
                </Link>
                <img className='logo' src={logo} alt='calendar with a heart in it' />
            </div>
            
            <div className='nav-bar-links__container'>
                <Link to='/dates' className='nav-bar__btn'>
                    Dates 
                </Link>

                <Link to='/favorites' className='nav-bar__btn'>
                    Favorites
                </Link>
            </div>            
        </div>
    )
}