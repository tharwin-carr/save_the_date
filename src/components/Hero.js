import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero-header__container'>
                <h1 className='hero-header__text'>
                    Find the perfect date idea.
                </h1>
            </div>

            <div className='hero-description__container'>
                <p className='hero-description__text'>
                    <i>Save The Date helps make those "What should we do today?" conversations a little easier!</i>
                </p>
            </div>

            <div className='hero-button__container'>
                <Link to='/dates'>
                    <button className='btn hero-button__btn'>
                        <span className='hero-btn__title'>Get Started</span>
                    </button>
                </Link>
            </div>                        
        </div>
    )
}
