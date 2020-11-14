import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className='nav-bar__container'>
            <div className='nav-bar__header'>
                <Link to='/' className='nav-bar__title'>
                    Save The Date
                </Link>
            </div>
            
            <div className='nav-bar-logo__container'>
                <Link to='/dates'>
                    <img src="https://img.icons8.com/ios-filled/24/000000/calendar-15.png" alt='calendar icon'/>
                </Link>
            </div>            
        </div>
    )
}