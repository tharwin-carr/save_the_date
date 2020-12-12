import React from 'react'
import DatesButton from '../buttons/DatesButton'

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
                    <span className='hero-title'>Save The Date</span> helps make those "What should we do today?" conversations a little easier!
                </p>
            </div>

            <div className='hero-button__container'>
                <DatesButton 
                    btnClass='btn hero-button__btn'
                    titleClass='hero-btn__title'
                    title='Get Started' 
                />
            </div>                                                       
        </div>
    )
}
