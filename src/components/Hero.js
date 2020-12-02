import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero-header__container'>
                <h1 className='hero-header__text'>
                    Welcome to Save The Date, a platform to help find new and exciting date ideas.
                </h1>
            </div>

            <div className='hero-description__container'>
                <p className='hero-description__text'>
                    Save The Date helps eliminate the monotony of going on the same dates with your significant other
                    over and over again by randomly generating a date idea in seconds!
                </p>
            </div>

            <div className='hero-button__container'>
                <Link to='/dates'>
                    <button className='btn hero-button__btn'>
                        Get Started
                    </button>
                </Link>
            </div>                        
        </div>
    )
}
